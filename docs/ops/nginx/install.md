---
date: 2022-10-25 22:48:45
---
# 安装部署

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

::: details NginxConfig
# 将所有http请求自动转发https
```shell
server {
    listen 80;
    server_name example.com;
    rewrite ^(.*)$ https://$host$1 permanent;   #将所有HTTP请求通过rewrite重定向到HTTPS。
    location / {
        index index.html index.htm;
    }
}
```

# https代理静态文件
```shell
server {
     listen 443 ssl;
     server_name static.example.com;
     index index.html index.htm;
     ssl_certificate cert/static.example.com.pem;  #将domain name.pem替换成您证书的文件名称。
     ssl_certificate_key cert/static.example.com.key; #将domain name.key替换成您证书的密钥文件名称。
     ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #使用该协议进行配置。
     ssl_prefer_server_ciphers on;
     
     location / {
         index index.html index.htm;
         root /etc/nginx/modules/project/dist/;
     }
  }
```

# https反代其他端口
```shell
server {
    listen 443 ssl;
    server_name           server.example.com;
    ssl_certificate       cert/server.example.com.pem; # 证书
    ssl_certificate_key   cert/server.example.com.key; # 密钥
    ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
    location / {
        proxy_pass https://localhost:2333;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```
:::