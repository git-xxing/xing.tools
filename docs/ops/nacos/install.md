---
date: 2022-10-25 22:48:45
---
# 简单部署

## 环境要求
::: tip 环境要求
- 64位操作系统，推荐 Linux/Unix/macOS
- [64位 JDK 1.8+](../jdk/install.md)
:::

## 1.下载安装包
官网提供[安装包](https://github.com/alibaba/nacos/releases?page=1)，有1x/2x版本。[这里使用2x..](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html)

## 2.上传并解压
```shell
# 1.ftp等方式上传压缩包
# 2.新建目录并解压至对应文件夹
mkdir /usr/local/nacos
tar -zxvf nacos-server-2.2.3.tar.gz 
mv nacos/* /usr/local/nacos/
```

## 3.修改配置文件
```shell
vim /usr/local/nacos/conf/application.properties
```
::: details nacos config
```properties
# 数据库修改为mysql
spring.datasource.platform=mysql
db.num=1db.url.0=jdbc:mysql://mysql.nacos.host:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC
db.user.0=root
db.password.0=password

# 秘钥配置
nacos.core.auth.plugin.nacos.token.secret.key=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=

nacos.core.auth.server.identity.key=nacos
nacos.core.auth.server.identity.value=nacos123123
```
:::

## 4.启动/关闭
```shell
sh /usr/local/nacos/bin/startup.sh -m standalone
sh /usr/local/nacos/bin/shutdown.sh 
```

## 5.服务注册&发现和配置管理
### 服务注册
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'

### 服务发现
curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName'

### 发布配置
curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=HelloWorld"

### 获取配置
curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"
