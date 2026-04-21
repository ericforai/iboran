#!/usr/bin/env bash
# 安装 iboran 站点巡检 crontab（每 5 分钟执行一次）
# 用法: bash /opt/iboran/scripts/install-monitor.sh

SCRIPT="/opt/iboran/scripts/site-monitor.sh"
LOG="/var/log/iboran-monitor.log"
CRON_JOB="*/5 * * * * bash $SCRIPT >> $LOG 2>&1"

chmod +x "$SCRIPT"

# 如果没有已存在的相同 cron，则添加
if crontab -l 2>/dev/null | grep -qF "site-monitor.sh"; then
  echo "✓ 巡检任务已存在，跳过安装"
else
  (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
  echo "✅ 已安装巡检 crontab: $CRON_JOB"
fi

echo "查看日志命令: tail -f $LOG"
