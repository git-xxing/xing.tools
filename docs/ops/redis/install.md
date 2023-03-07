---
date: 2022-10-25 22:48:45
---
# 安装与部署

```shell
# Redis 5.0 被包含在默认的 Ubuntu 20.04 软件源中。想要安装它，以 root 或者其他 sudo 身份运行下面的命令
sudo apt update
sudo apt install redis-server

# 查看redis状态
sudo systemctl status redis-server

# 启用远程访问 
vim /etc/redis/redis.conf
# 1.注释 bind 127.0.0.1 ::1
# 2.关闭保护模式 protected-mode no
# 3.添加密码 requirepass pawwsord

# 想要验证所有设置都设置好了，你可以尝试使用redis-cli从你的远程机器上 ping 一下 Redis 服务器。这个命令将会返回一个响应：PONG
redis-cli -h <REDIS_IP_ADDRESS> ping
```