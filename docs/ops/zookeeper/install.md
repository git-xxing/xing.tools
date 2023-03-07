---
date: 2022-10-25 22:48:45
---
# 安装与部署（单机）

## 环境要求
::: tip 环境要求
- 64位操作系统，推荐 Linux/Unix/macOS
- 64位 JDK 1.8+
:::
## 为 ZooKeeper 创建用户
```shell
# 为 ZooKeeper 服务创建一个单独的用户
useradd zookeeper -m
# 将新用户设置为默认 shell
usermod --shell /bin/bash zookeeper
# 为用户设置密码
passwd zookeeper
# 将用户添加到 sudoers 组，使其具有 sudo 权限
usermod -aG sudo zookeeper
# 通过列出 sudoers 组中的帐户来检查以验证用户现在是超级用户
sudo getent group sudo

```
## 创建 ZooKeeper 数据目录
```shell
# 创建一个可以存储配置和状态数据的目录结构
sudo mkdir -p /data/zookeeper
# 将 ZooKeeper 用户所有权授予该目录
chown -R zookeeper:zookeeper /data/zookeeper
```
##  ZooKeeper [下载并安装](https://zookeeper.apache.org/releases.html)
```shell
# 新建zookeeper目录
mkdir /usr/local/zookeeper
# 下载安装包
sudo wget https://downloads.apache.org/zookeeper/zookeeper-3.6.1/apache-zookeeper-3.6.1-bin.tar.gz
# 解压文件
sudo tar -xvf apache-zookeeper-3.6.1-bin.tar.gz
# 将文件移动到新建目录
mv apache-zookeeper-3.6.1-bin/* /usr/local/zookeeper/
# 授予该文件的 zookeeper 用户所有权
chown -R zookeeper:zookeeper /usr/local/zookeeper

```
## 修改配置文件
```shell
# 复制配置文件
cp conf/zoo_sample.cfg zoo.cfg
# 修改文件内容
sudo vim conf/zoo.cfg
```
修改为以下内容
```text
# 每个刻度的毫秒数。
tickTime=2000
# 初始同步阶段可以进行的滴答数。
initLimit=5 
# 在发送请求和获得确认之间可以经过的滴答数。
syncLimit=2 
# 存储内存数据库快照和更新事务日志的目录。
dataDir=/data/zookeeper 
# 侦听客户端连接的端口。
clientPort=2181
# Zookeeper3.5的新特性 AdminServer，默认使用8080端口
admin.serverPort=18080
```
## 启动 ZooKeeper 服务
```shell
# 启动zookeeper
sudo bin/zkServer.sh start
# 查看zookeeper状态
sudo bin/zkServer.sh status
# 关闭zookeeper
sudo bin/zkServer.sh stop
```

## 连接到 ZooKeeper 服务器
```shell
bin/zkCli.sh -server localhost:2181
# 退出 输入 quit
```

## 创建系统服务文件
```shell
sudo vim /etc/systemd/system/zookeeper.service
```
粘贴以下内容
```text
[Unit]
Description=Zookeeper Daemon
Documentation=http://zookeeper.apache.org
Requires=network.target
After=network.target

[Service]    
Type=forking
WorkingDirectory=/usr/local/zookeeper
User=zookeeper
Group=zookeeper
ExecStart=/usr/local/zookeeper/bin/zkServer.sh start /usr/local/zookeeper/conf/zoo.cfg
ExecStop=/usr/local/zookeeper/bin/zkServer.sh stop /usr/local/zookeeper/conf/zoo.cfg
ExecReload=/usr/local/zookeeper/bin/zkServer.sh restart /usr/local/zookeeper/conf/zoo.cfg
ExecStatus=/usr/local/zookeeper/bin/zkServer.sh status /usr/local/zookeeper/conf/zoo.cfg
TimeoutSec=30
Restart=on-failure

[Install]
WantedBy=default.target
```
```shell
# 重新加载systemd服务
systemctl daemon-reload
# 启动zookeeper
systemctl start zookeeper
# 添加自启
systemctl enable zookeeper
# 关闭zookeeper
systemctl stop zookeeper
# 查看状态
systemctl status zookeeper
```
## 配置复制 ZooKeeper
生产环境需要设置 ZooKeeper 节点的复制集群。
安装 Java、创建 ZooKeeper 用户并下载二进制包后，您需要创建一个配置文件。与独立模式的基本配置不同，复制模式包含更多行。
同一应用程序中的所有服务器都需要有配置文件的副本。
```text
# 每个刻度的毫秒数。
tickTime=2000
# 初始同步阶段可以进行的滴答数。
initLimit=5 
# 在发送请求和获得确认之间可以经过的滴答数。
syncLimit=2 
# 存储内存数据库快照和更新事务日志的目录。
dataDir=/data/zookeeper 
# 侦听客户端连接的端口。
clientPort=2181
# Zookeeper3.5的新特性 AdminServer，默认使用8080端口
admin.serverPort=18080
server.1=[server_ip]:2888:3888
server.2=[server_ip]:2888:3888
server.3=[server_ip]:2888:3888
```
