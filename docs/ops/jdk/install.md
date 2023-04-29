---
date: 2022-10-25 22:48:45
---
# 源码安装  
::: tip
源码安装相对于`apt` `yum`等工具来说较为繁琐，但该方法配置了`JAVA_HOME`等环境变量，在部署一些Java应用时不会出现找不到环境变量的情况。
:::

## 1.下载安装包
前往 [Oracle](https://www.oracle.com/java/technologies/downloads/#java8)下载对应的JDK版本。
```shell
# Linux / MacOS 查看系统架构
uname -a
# Windows 查看系统架构
systeminfo
```

![16825831121406](https://oss.xing.tools/2023/04/27/16825831121406.jpg)

## 2.上传安装包至服务器
用`SCP`命令 或`FTP`工具将安装包上传至服务器。

## 3.解压并安装JDK
```shell
# 新建JDK安装目录
sudo mkdir /usr/local/jdk
# 解压安装包
sudo tar -xvf jdk-8u371-linux-x64.tar.gz
# 将安装包移至 /usr/local/jdk
sudo mv jdk1.8.0_371/ /usr/local/jdk/

```

## 4.配置环境变量
```shell{4}
# 为所有用户添加环境变量
sudo vim /etc/profile

# 在文件末尾追加以下内容，注意文件目录
export JAVA_HOME=/usr/local/jdk/jdk1.8.0_371
export PATH=$JAVA_HOME/bin:$PATH

# 刷新配置
source /etc/profile

```

## 5.查看版本
```shell
# 查控Java版本
java -version

# 查看JAVA_HOME目录
echo $JAVA_HOME

```
 