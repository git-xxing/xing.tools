---
date: 2022-10-25 22:48:45
---
# Charles
::: info 简介
Charles是一款代理服务器，通过将自己设置成系统（电脑或者浏览器）的网络访问代理服务器，然后截取请求和请求结果进行分析抓包。该软件是用Java写的，能够在Windows，Mac，Linux上使用。安装Charles的时候要先装好Java环境。
:::

## 下载安装
[官网下载](https://www.charlesproxy.com/latest-release/download.do)

## 在线激活
点击 Help -> Registered to
```shell
Registered Name: https://zhile.io
License Key: 48891cf209c6d32bf4
```

## 基础功能 
Charles 提供两种查看封包的视图， “Structure” 和 “Sequence”。
- Structure 视图将网络请求按访问的域名分类。
- Sequence 视图将网络请求按访问的时间排序。

![16784414312457](https://oss.xing.tools/2023/03/10/16784414312457.jpg)

![16784415265329](https://oss.xing.tools/2023/03/10/16784415265329.jpg)

## 抓包
### Http抓包
#### 1.将Charles设置为系统代理（跟Chashx类软件会冲突）

![16784417368127](https://oss.xing.tools/2023/03/10/16784417368127.jpg)

### Https抓包
#### 1.将Charles设置为系统代理（跟Chashx类软件会冲突）
#### 2.安装根证书
`Help -> SSL Proxying -> Install Charles Root Certificate`

![16784419862653](https://oss.xing.tools/2023/03/10/16784419862653.jpg)
添加证书  [根证书下载](http://chls.pro/ssl)

![16784422861051](https://oss.xing.tools/2023/03/10/16784422861051.jpg)
查看证书 信任证书

![16784424009607](https://oss.xing.tools/2023/03/10/16784424009607.jpg)
Charles设置Proxy
Proxy -> SSL Proxying Settings
勾选Enable SSL Proxying,点击Add

![16784426470571](https://oss.xing.tools/2023/03/10/16784426470571.jpg)
::: warning 注意
- 未设置前https的标识都有`<unknown>`
- Host设置，不知道具体的API地址，可设置为" * ", 代表所有
- Port设置，http port 80, https port 443
:::

### 手机抓包
#### 1.启用Charles代理
`Proxy -> Proxy Settings`

![16784429337511](https://oss.xing.tools/2023/03/10/16784429337511.jpg)

#### 2.获取本机ip
`Help --> Local IP address`
![16784412542580](https://oss.xing.tools/2023/03/10/16784412542580.jpg)


#### 3.设置手机代理
手机和电脑连接同一个WiFi，点击“设置 -> 无线局域网 -> 连接的WiFi”，设置
HTTP代理：
服务器为电脑IP地址：如192.168.31.169
端口：8888

![16784431147003](https://oss.xing.tools/2023/03/10/16784431147003.jpg)

#### 3.电脑上打开Charles进行HTTP抓包
手机上打开某个App或者浏览器什么的，如果不能上网，检查前面步骤是否正确
点击“Allow”允许，Charles出现手机的请求列表，到此为止可以对HTTP请求进行抓包了。
#### 4.手机https抓包
##### 1.安装SSL证书到手机设备
点击 Help -> SSL Proxying -> Install Charles Root Certificate on a Mobile Device
出现弹窗得到地址 [chls.pro/ssl](chls.pro/ssl)
在手机Safari浏览器输入地址 chls.pro/ssl，出现证书安装页面，点击安装
手机设置有密码的输入密码进行安装。
##### 2.证书信任设置
点击“设置 -> 通用 -> 关于本机 -> 证书信任设置 -> 打开开关
##### 3.Charles设置Proxy
点击 Proxy -> SSL Proxying Settings
勾选Enable SSL Proxying，点击Add
Host填写：example.com
Port填写：443
##### 4.进行HTTPS抓包
让手机重新发送https请求，可看到抓包
注意：不抓包请关闭手机HTTP代理，否则断开与电脑连接后会连不上网。
