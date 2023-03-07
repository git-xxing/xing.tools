---
date: 2022-10-25 22:48:45
---
# 安装与部署

```shell
sudo apt update
sudo apt install nginx

# 修改配置
cd /etc/nginx/conf.d
touch nginx.conf
vim nginx.conf

# 重新加载配置
nginx -s reload 
```