---
date: 2025-03-19 19:13:51
---
# 证书自动续签

## 安装certbot
```shell
sudo apt update
sudo apt install certbot
```

## 安装 Nginx插件
```bash
sudo apt install python3-certbot-nginx
```

## 获取证书（示例：Nginx）
```bash 
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 设置自动续签任务：
```bash
sudo crontab -e
```

## 添加以下行（每天凌晨3点自动尝试续签）：
```bash
0 3 * * * certbot renew --quiet
```