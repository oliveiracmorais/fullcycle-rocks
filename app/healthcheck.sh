# app/healthcheck.sh
#!/bin/sh
for i in $(seq 1 12); do
  if wget -q --spider http://127.0.0.1:3000/health; then
    exit 0
  fi
  sleep 5
done
exit 1
