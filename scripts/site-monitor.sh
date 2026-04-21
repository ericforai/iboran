#!/usr/bin/env bash
# iboran 站点巡检脚本 v1.0
# 每 5 分钟执行一次，检测关键页面和 Docker 容器状态
# 发现异常：自动尝试重启 + 发邮件告警
# 安装方式: bash /opt/iboran/scripts/install-monitor.sh

set -euo pipefail

# ── 配置 ────────────────────────────────────────────
CONTAINER_NAME="iboran-app"
BASE_URL="http://127.0.0.1:3000"
LOG_FILE="/var/log/iboran-monitor.log"
ALERT_STATE_FILE="/tmp/iboran-monitor-alert.state"
ALERT_COOLDOWN=1800   # 30 分钟内同类告警只发一次
ENV_FILE="/opt/iboran/.env"

# 需要巡检的关键页面（状态码必须是 200）
CHECK_PATHS=(
  "/"
  "/products/staff-ai"
  "/products/smart-bid-pro"
  "/solution/industry/biopharmaceutical"
  "/posts"
  "/contact"
)
# ────────────────────────────────────────────────────

timestamp() { date '+%Y-%m-%d %H:%M:%S'; }

log() { printf '[%s] %s\n' "$(timestamp)" "$*" | tee -a "$LOG_FILE"; }

load_env() {
  [[ -f "$ENV_FILE" ]] || return 0
  # 安全解析 .env：去掉注释和空行，支持带空格的值
  while IFS= read -r line || [[ -n "$line" ]]; do
    # 跳过注释和空行
    [[ "$line" =~ ^[[:space:]]*# ]] && continue
    [[ -z "${line// }" ]] && continue
    # 提取 KEY=VALUE（支持带引号和空格的值）
    if [[ "$line" =~ ^([A-Za-z_][A-Za-z0-9_]*)=(.*)$ ]]; then
      local key="${BASH_REMATCH[1]}"
      local val="${BASH_REMATCH[2]}"
      # 去掉首尾引号
      val="${val%\"}" ; val="${val#\"}"
      val="${val%\'}" ; val="${val#\'}"
      export "$key"="$val"
    fi
  done < "$ENV_FILE"
}

# ── 告警限流 ─────────────────────────────────────────
can_send_alert() {
  [[ "$1" == "recovery" ]] && return 0
  if [[ -f "$ALERT_STATE_FILE" ]]; then
    local last elapsed
    last=$(cat "$ALERT_STATE_FILE")
    elapsed=$(( $(date +%s) - last ))
    if (( elapsed < ALERT_COOLDOWN )); then
      log "告警限流: 距上次告警 $((elapsed/60)) 分钟，冷却期未到"
      return 1
    fi
  fi
  return 0
}

send_alert() {
  local type="$1" subject="$2" body="$3"
  can_send_alert "$type" || return 0

  if [[ -z "${SMTP_HOST:-}" || -z "${SMTP_USER:-}" || -z "${SMTP_PASS:-}" || -z "${LEAD_EMAIL_TO:-}" ]]; then
    log "SMTP 未配置，跳过邮件告警"
    return 0
  fi

  ALERT_SUBJECT="$subject" ALERT_BODY="$body" \
  python3 - <<'PY'
import os, smtplib
from email.mime.text import MIMEText
msg = MIMEText(os.environ["ALERT_BODY"], "plain", "utf-8")
msg["Subject"] = os.environ["ALERT_SUBJECT"]
msg["From"]    = os.environ.get("SMTP_FROM", os.environ["SMTP_USER"])
recipients     = [r.strip() for r in os.environ["LEAD_EMAIL_TO"].split(",") if r.strip()]
msg["To"]      = ", ".join(recipients)
try:
    with smtplib.SMTP_SSL(os.environ["SMTP_HOST"], int(os.environ.get("SMTP_PORT","465"))) as s:
        s.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
        s.sendmail(msg["From"], recipients, msg.as_string())
    print("邮件已发送")
except Exception as e:
    print(f"邮件发送失败: {e}")
PY

  if [[ "$type" == "recovery" ]]; then
    rm -f "$ALERT_STATE_FILE"
  else
    date +%s > "$ALERT_STATE_FILE"
  fi
}

# ── 容器检查 ──────────────────────────────────────────
container_running() {
  [[ "$(docker inspect --format '{{.State.Status}}' "$CONTAINER_NAME" 2>/dev/null)" == "running" ]]
}

restart_container() {
  log "尝试重启容器 $CONTAINER_NAME ..."
  docker start "$CONTAINER_NAME" 2>&1 | tee -a "$LOG_FILE" || true
  sleep 8
  container_running && log "容器重启成功" && return 0
  log "容器重启失败"
  return 1
}

# ── HTTP 检查 ─────────────────────────────────────────
check_http() {
  local path="$1"
  local status
  status=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "${BASE_URL}${path}" 2>/dev/null || echo "000")
  echo "$status"
}

# ── 主逻辑 ───────────────────────────────────────────
main() {
  load_env
  mkdir -p "$(dirname "$LOG_FILE")"

  local failed_pages=()
  local container_ok=true

  # 1. 检查 Docker 容器
  if ! container_running; then
    log "⚠️  容器 $CONTAINER_NAME 未运行"
    container_ok=false
    if restart_container; then
      log "✅ 容器已自动重启，等待就绪..."
      sleep 5
    fi
  fi

  # 2. 检查关键页面
  for path in "${CHECK_PATHS[@]}"; do
    status=$(check_http "$path")
    if [[ "$status" != "200" ]]; then
      log "❌ 页面异常: $path → HTTP $status"
      failed_pages+=("$path (HTTP $status)")
    else
      log "✅ $path → 200"
    fi
  done

  # 3. 汇总并告警
  if [[ ${#failed_pages[@]} -gt 0 ]] || [[ "$container_ok" == "false" ]]; then
    local body="iboran 站点巡检异常报告\n时间: $(timestamp)\n主机: $(hostname)\n\n"

    if [[ "$container_ok" == "false" ]]; then
      body+="【容器状态】$CONTAINER_NAME 异常（已尝试自动重启）\n\n"
    fi

    if [[ ${#failed_pages[@]} -gt 0 ]]; then
      body+="【异常页面】\n"
      for p in "${failed_pages[@]}"; do body+="  - $p\n"; done
      body+="\n请立即登录服务器检查: ssh root@47.111.2.171\n"
      body+="查看日志: docker logs $CONTAINER_NAME --tail 50\n"
    fi

    log "发送告警邮件..."
    send_alert "failure" "🚨 [iboran] 站点巡检异常 - $(timestamp)" "$(printf '%b' "$body")"
  else
    log "✅ 所有检查通过"
    # 如果之前有告警，发恢复通知
    if [[ -f "$ALERT_STATE_FILE" ]]; then
      send_alert "recovery" "✅ [iboran] 站点已恢复正常 - $(timestamp)" \
        "iboran 站点所有页面已恢复正常。\n时间: $(timestamp)"
    fi
  fi
}

main "$@"
