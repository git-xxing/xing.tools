---
date: 2022-10-25 22:48:45
---
# [V2ray](https://www.v2ray.com/)
v2ray有许多种模式，本文使用 `V2Ray + WebSocket + TLS + Nginx` 
::: warning
以下指令假设已在 su 环境下，如果不是，请先运行 sudo su。

运行下面的指令下载并安装 V2Ray。当 yum 或 apt-get 可用的情况下，此脚本会自动安装 unzip 和 daemon。这两个组件是安装 V2Ray 的必要组件。如果你使用的系统不支持 yum 或 apt-get，请自行安装 unzip 和 daemon
:::

## 准备
1. 域名一个，并解析到服务器ip
2. SSL证书，[阿里云](https://yundun.console.aliyun.com/?spm=5176.8466032.favorite.dcas.3ae11450sWbTpH&p=cas#/overview)等厂商均提供免费证书

## 1.安装v2ray
```shell
curl -Ls https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh | sudo bash
# 备用链接  curl -Ls https://oss.xing.tools/sh/install-v2ray-release.sh | sudo bash
```
## 2.配置v2ray
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
    server_name           v2ray.domain.host; # 域名
    ssl_certificate       cert/v2ray.domain.host.pem; # 证书
    ssl_certificate_key   cert/v2ray.domain.host.key; # 密钥
    ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers           HIGH:!aNULL:!MD5;
    location / {
        proxy_pass https://localhost:2333;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```
:::
 
## 4.刷新配置
```shell
# 重启v2ray
systemctl restart v2ray 
# 重新加载nginx配置文件
nginx -s reload
```

## [5.CloudflareWarp（可选）](https://github.com/haoel/haoel.github.io#941-warp-%E6%A8%A1%E5%BC%8F)
很多我们需要访问的网站都需要使用“原生 IP”，比如：Disney+， ChatGPT，New Bing 等。
所谓“原生 IP”就是指该网站的 IP 地址和其机房的 IP 地址是一致的，但是，很多 IDC 提供商的 IP 都是从其它国家调配来的，这导致我们就算是翻墙了，也是使用了美国的 VPS，但是还是访问不了相关的服务。所以，我们需要使用 Cloudflare Warp 来访问这些网站。
 
### 1.安装
   如果是 Ubuntu，那么可以使用以下命令在添加安装源：
```shell
sudo apt install curl
curl https://pkg.cloudflareclient.com/pubkey.gpg | gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-warp-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/cloudflare-warp-archive-keyring.gpg] https://pkg.cloudflareclient.com/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflare-client.list
```
### 2.配置
   如果是第一次安装，你需要先注册一个帐号。其注册信息会在这里 `/var/lib/cloudflare-warp/reg.json`
```shell
apt update
apt install cloudflare-warp
warp-cli register
```
然后设置代理模式，这点非常重要，因为默认是 WARP 模式，这个会把你的整个 VPS 带到 Cloudflare 的 VPN 网络中，那么就会出现无法连接的情况。

```shell
warp-cli set-mode proxy
# 然后，设置永久连接模式。
warp-cli enable-always-on
```
配置完后，你可以使用 `warp-cli settings` 来查看配置。你也可以通过查看配置文件来看是否配置成功，配置文件在 `/var/lib/cloudflare-warp/settings.json`。
### 3.连接
```shell
# 连接
warp-cli connect
# 查看状态
warp-cli status
```
### 4.验证
   你可以使用如下命令来验证是否成功：
```shell
curl -x "socks5://127.0.0.1:40000" ipinfo.io
```
如果输出现如下的信息，那么恭喜你，你已经成功了
```shell
{
  "ip": "104.28.247.70",
  "org": "AS13335 Cloudflare, Inc."
}
```
### 5.配置v2ray路由
   Cloudflare WARP虽然能提供原生ip，但不是所有请求都想走warp，可以结合v2ray的路由规则做到特定网站走warp.
```shell
"outbounds": [
    {
        "tag": "openaiout",
        "protocol": "socks",
        "settings": {
            "servers": [
                {
                    "address": "127.0.0.1",
                    "port": 40000,
                }
            ]
        }
    }
]
......

"rules": [
    {
        "type": "field",
        "domain": [
            "ipinfo.io",
            "openai.com"
        ]
        "outboundTag": "openaiout"
    }
]
```


