#!/usr/bin/env bash

set -euo pipefail

APP_DIR="/home/iboran"
SERVICE_PATH="/etc/systemd/system/iboran-mongo-watchdog.service"
TIMER_PATH="/etc/systemd/system/iboran-mongo-watchdog.timer"
WATCHDOG_SCRIPT="$APP_DIR/deploy/mongo-watchdog.sh"

if [[ ! -x "$WATCHDOG_SCRIPT" ]]; then
  chmod +x "$WATCHDOG_SCRIPT"
fi

cat > "$SERVICE_PATH" <<EOF
[Unit]
Description=iboran MongoDB watchdog
After=docker.service network-online.target
Requires=docker.service

[Service]
Type=oneshot
ExecStart=$WATCHDOG_SCRIPT
EOF

cat > "$TIMER_PATH" <<EOF
[Unit]
Description=Run iboran MongoDB watchdog every minute

[Timer]
OnBootSec=2min
OnUnitActiveSec=1min
Persistent=true

[Install]
WantedBy=timers.target
EOF

docker update --restart unless-stopped iboran-mongo-1 >/dev/null 2>&1 || true

systemctl daemon-reload
systemctl enable --now iboran-mongo-watchdog.timer
systemctl start iboran-mongo-watchdog.service

echo "Installed iboran-mongo-watchdog.service and timer"
