---
date: 2022-10-25 22:48:45
---
# 安装与部署(单节点单副本)
## 环境要求
::: tip 环境要求
- 64位操作系统，推荐 Linux/Unix/macOS
- 64位 JDK 1.8+
:::

## 1.下载安装包
官网提供[源码](https://dist.apache.org/repos/dist/release/rocketmq/5.1.0/rocketmq-all-5.1.0-source-release.zip) / [二进制包](https://dist.apache.org/repos/dist/release/rocketmq/5.1.0/rocketmq-all-5.1.0-bin-release.zip)两种安装方式，这里采用二进制包，源码安装需要额外安装`maven`编译 ，本文安装的为5.1版本，[其他版本可以点这里](https://dist.apache.org/repos/dist/release/rocketmq/)
```shell
# 下载安装包
wget https://dist.apache.org/repos/dist/release/rocketmq/5.1.0/rocketmq-all-5.1.0-bin-release.zip
# 解压安装包 没有安装解压软件执行 sudo apt-get install unzip
unzip rocketmq-all-5.1.0-bin-release.zip && mv rocketmq-all-5.1.0-bin-release /usr/local/rocketmq
# 进入rocketmq目录
cd /usr/local/rocketmq/
```
## 2.调整内存大小
```shell
vim bin/runbroker.sh 
# 调整参数
JAVA_OPT="${JAVA_OPT} -server -Xms1g -Xmx1g"
vim bin/runserver.sh
JAVA_OPT="${JAVA_OPT} -server -Xms1g -Xmx1g -Xmn512m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"
```
## 3.修改broker配置
```shell
vim /conf/broker.conf
# 添加 brokerIP1=ip
```

## 4.启动NameServer
```shell
# 启动namesrv
nohup sh bin/mqnamesrv &
# 验证namesrv是否启动成功
tail -f ~/logs/rocketmqlogs/namesrv.log
```
::: tip
我们可以在namesrv.log 中看到 'The Name Server boot success..'， 表示NameServer 已成功启动。
:::

## 3.启动Broker+Proxy
```shell
# 先启动broker
nohup sh bin/mqbroker -n localhost:9876 --enable-proxy &
# 验证broker是否启动成功, 比如, broker的ip是192.168.1.2 然后名字是broker-a
tail -f nohup.out 
```
## 4.测试消息
```shell
# 添加环境变量
export NAMESRV_ADDR=localhost:9876 
# 发送消息
sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
# 接受消息
sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
```
## 5.关闭Server
```shell
sh bin/mqshutdown broker

sh bin/mqshutdown namesrv 
```