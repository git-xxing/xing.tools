---
title: GitHub配置SSH Key
date: 2022-10-25 22:48:45
---
# GitHub配置SSH Key
:::tip
GitHub于2021-08-13停止使用账号密码登录，解决方式之一：通过SSH Key来实现登录。  
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.          
注：只支持`ssh`的方式不支持`https`方式。  
例：`git@github.com:gitxingtools/xing.tools.git`  
:::

## 1.检查本地是否有`id_rsa` `id_rsa.pub`
```shell
ls ~/.ssh
```
![16667132089226](https://oss.xing.tools/2022/10/25/16667132089226.jpg)

## 2.生成SSH Key （若`id_rsa`已存在可跳过此步骤）
```
ssh-keygen -t rsa -C "email@xing.tools"
```

## 3.将`id_rsa.pub`内容添加至GitHub
```shell
# 复制秘钥内容
pbcopy < ~/.ssh/id_rsa.pub 
```
将内容添加至[GitHub](https://github.com/settings/ssh/new)
![16667132425677](https://oss.xing.tools/2022/10/25/16667132425677.jpg)

## 4.验证
```
ssh -T git@github.com
```

![16667132824515](https://oss.xing.tools/2022/10/25/16667132824515.jpg)
