---
date: 2022-10-25 22:48:45
---
# 简单安装
::: warning
虽然`apt` `yum` 等方式安装更为便捷，但该方式安装没有 `JAVA_HOME` 环境变量，在安装`zookeeper`等中间件时会出找不到java环境。
:::

<CodeGroup>
<CodeGroupItem title="ubuntu" active>

```shell
# 安装JDK1.8
$ sudo apt -y install openjdk-8-jdk
# 查看JDK版本
$ sudo java -version
```
</CodeGroupItem>


<CodeGroupItem title="yum">

```shell
# 搜索JDK版本
$ yum list java*   
# 安装JDK1.8
$ yum -y install java-1.8.0-openjdk.x86_64
# 查看JDK版本
$ java -version
```

</CodeGroupItem>
</CodeGroup>