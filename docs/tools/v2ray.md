---
date: 2022-10-25 22:48:45
---
# [V2ray](https://www.v2ray.com/)

::: warning
以下指令假设已在 su 环境下，如果不是，请先运行 sudo su。

运行下面的指令下载并安装 V2Ray。当 yum 或 apt-get 可用的情况下，此脚本会自动安装 unzip 和 daemon。这两个组件是安装 V2Ray 的必要组件。如果你使用的系统不支持 yum 或 apt-get，请自行安装 unzip 和 daemon
:::

## 安装前准备
1. 域名一个，并解析到服务器ip
2. SSL证书，[阿里云](https://yundun.console.aliyun.com/?spm=5176.8466032.favorite.dcas.3ae11450sWbTpH&p=cas#/overview)等厂商均提供免费证书

## 1.下载并执行脚本
```shell
curl -Ls https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh | sudo bash
# 备用链接  curl -Ls https://oss.xing.tools/sh/install-v2ray-release.sh | sudo bash
```
## 2.修改v2ray配置
```shell
vim  /usr/local/etc/v2ray/config.json
```
::: details V2ray配置文件
```json{28,33,44,45}
{
    "log": {
        "loglevel": "warning"
    },
    "dns": {
        "servers": [
            "https+local://dns.google/dns-query",
            "8.8.8.8",
            "1.1.1.1",
            "localhost"
        ]
    },
    "routing": {
        "domainStrategy": "AsIs",
        "rules": [
            {
                "type": "field",
                "ip": [
                    "geoip:private"
                ],
                "outboundTag": "block"
            }
        ]
    },
    "inbounds": [
        {
            "listen": "0.0.0.0",
            "port": 2333,
            "protocol": "vmess",
            "settings": {
                "clients": [
                    {
                        "id": "45f745a3-53ca-4f25-afe6-1111111111",
                        "alterId": 0
                    }
                ]
            },
            "streamSettings": {
                "network": "ws",
                "security": "tls",
                "tlsSettings": {
                    "certificates": [
                        {
                            "certificateFile": "/etc/nginx/cert/v2ray.domain.host.pem",
                            "keyFile": "/etc/nginx/cert/v2ray.domain.host.key"
                        }
                    ]
                }
            }
        }
    ],
    "outbounds": [
        {
            "protocol": "freedom",
            "tag": "direct"
        },
        {
            "protocol": "blackhole",
            "tag": "block"
        }
    ]
}
```
:::

## 3.安装Nginx
```shell
apt install nginx
# 创建证书文件夹
mkdir /etc/nginx/cert
# 上传证书至`/etc/nginx/cert`
# 新建nginx.conf
touch /etc/nginx/conf.d/nginx.conf
# 修改Nginx配置
vim /etc/nginx/conf.d/nginx.conf 
``` 

::: details Nginx配置文件
```text {3,4,5,9}
server {
    listen 443 ssl;
    server_name v2ray.domain.host; # 域名
    ssl_certificate       cert/v2ray.domain.host; # 证书
    ssl_certificate_key   cert/v2ray.domain.host; # 密钥
    ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers           HIGH:!aNULL:!MD5;
    location / {
        proxy_pass https://localhost:2333; 
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```
:::
 
## 4.重新加载配置文件
```shell
# 重启v2ray
systemctl restart v2ray 
# 重新加载nginx配置文件
nginx -s reload
```