# [Charles 青花瓷](https://www.jianshu.com/p/ff85b3dac157)

## 破解
点击 Help -> Registered to
```shell
Registered Name: https://zhile.io
License Key: 48891cf209c6d32bf4
```
## HTTP抓包
#### 1.获取本机ip
#### 2.设置手机代理
手机和电脑连接同一个WiFi，点击“设置 -> 无线局域网 -> 连接的WiFi”，设置
HTTP代理：
服务器为电脑IP地址：如192.168.31.169
端口：8888
#### 3.电脑上打开Charles进行HTTP抓包
手机上打开某个App或者浏览器什么的，如果不能上网，检查前面步骤是否正确
点击“Allow”允许，Charles出现手机的请求列表，到此为止可以对HTTP请求进行抓包了。

## HTTPS抓包
#### 1.安装SSL证书到手机设备
点击 Help -> SSL Proxying -> Install Charles Root Certificate on a Mobile Device
出现弹窗得到地址 [chls.pro/ssl](chls.pro/ssl)
在手机Safari浏览器输入地址 chls.pro/ssl，出现证书安装页面，点击安装
手机设置有密码的输入密码进行安装。
#### 2.证书信任设置
点击“设置 -> 通用 -> 关于本机 -> 证书信任设置 -> 打开开关
#### 3.Charles设置Proxy
点击 Proxy -> SSL Proxying Settings
勾选Enable SSL Proxying，点击Add
Host填写：example.com
Port填写：443
#### 4.进行HTTPS抓包
让手机重新发送https请求，可看到抓包
注意：不抓包请关闭手机HTTP代理，否则断开与电脑连接后会连不上网。
