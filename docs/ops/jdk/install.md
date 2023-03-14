---
date: 2022-10-25 22:48:45
---
# 安装与部署
## 快速安装
<CodeGroup>
<CodeGroupItem title="ubuntu" active>

```shell
apt install openjdk-8-jdk
java -version
```
</CodeGroupItem>
<CodeGroupItem title="yum">

```shell
yum list java*
yum -y install java-1.8.0-openjdk*
java -version
```

</CodeGroupItem>
</CodeGroup>

## 安装包

::: tip
虽然apt/yum等方式安装更为便捷，但是此等方式安装没有`JAVA_HOME`环境变量，在安装zookeeper等中间件时会出找不到java环境等。
:::
### 1.下载安装包
前往[Oracle JDK 8下载页面](https://www.oracle.com/java/technologies/downloads/#java8)下载适合你系统的JDK版本（Linux x64 tar.gz）

### 2.解压安装包
```shell
# 新建jdk安装目录
mkdir /usr/jdk
# 解压文件
tar -zxf jdk-8u361-linux-x64.tar.gz
# 将解压的文件移至`/usr/jdk`目录下
mv jdk1.8.0_361/ /usr/local/java/
```

### 3.添加环境变量
```shell
# 为所有用户添加环境变量
sudo vim /etc/profile
```
追加以下内容
```shell
export JAVA_HOME=/usr/jdk/jdk1.8.0_361
export PATH=$JAVA_HOME/bin:$PATH
```
刷新配置
```shell
source /etc/profile
```

### 4.查看版本
```shell
java -version
```

### 5.查看JAVA_HOME目录
```shell
echo $JAVA_HOME
```