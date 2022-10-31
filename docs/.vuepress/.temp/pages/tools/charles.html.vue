<template><div><h1 id="charles-青花瓷" tabindex="-1"><a class="header-anchor" href="#charles-青花瓷" aria-hidden="true">#</a> <a href="https://www.jianshu.com/p/ff85b3dac157" target="_blank" rel="noopener noreferrer">Charles 青花瓷</a></h1>
<h2 id="破解" tabindex="-1"><a class="header-anchor" href="#破解" aria-hidden="true">#</a> 破解</h2>
<p>点击 Help -&gt; Registered to</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Registered Name: https://zhile.io
License Key: 48891cf209c6d32bf4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http抓包" tabindex="-1"><a class="header-anchor" href="#http抓包" aria-hidden="true">#</a> HTTP抓包</h2>
<h4 id="_1-获取本机ip" tabindex="-1"><a class="header-anchor" href="#_1-获取本机ip" aria-hidden="true">#</a> 1.获取本机ip</h4>
<h4 id="_2-设置手机代理" tabindex="-1"><a class="header-anchor" href="#_2-设置手机代理" aria-hidden="true">#</a> 2.设置手机代理</h4>
<p>手机和电脑连接同一个WiFi，点击“设置 -&gt; 无线局域网 -&gt; 连接的WiFi”，设置
HTTP代理：
服务器为电脑IP地址：如192.168.31.169
端口：8888</p>
<h4 id="_3-电脑上打开charles进行http抓包" tabindex="-1"><a class="header-anchor" href="#_3-电脑上打开charles进行http抓包" aria-hidden="true">#</a> 3.电脑上打开Charles进行HTTP抓包</h4>
<p>手机上打开某个App或者浏览器什么的，如果不能上网，检查前面步骤是否正确
点击“Allow”允许，Charles出现手机的请求列表，到此为止可以对HTTP请求进行抓包了。</p>
<h2 id="https抓包" tabindex="-1"><a class="header-anchor" href="#https抓包" aria-hidden="true">#</a> HTTPS抓包</h2>
<h4 id="_1-安装ssl证书到手机设备" tabindex="-1"><a class="header-anchor" href="#_1-安装ssl证书到手机设备" aria-hidden="true">#</a> 1.安装SSL证书到手机设备</h4>
<p>点击 Help -&gt; SSL Proxying -&gt; Install Charles Root Certificate on a Mobile Device
出现弹窗得到地址 <a href="chls.pro/ssl">chls.pro/ssl</a>
在手机Safari浏览器输入地址 chls.pro/ssl，出现证书安装页面，点击安装
手机设置有密码的输入密码进行安装。</p>
<h4 id="_2-证书信任设置" tabindex="-1"><a class="header-anchor" href="#_2-证书信任设置" aria-hidden="true">#</a> 2.证书信任设置</h4>
<p>点击“设置 -&gt; 通用 -&gt; 关于本机 -&gt; 证书信任设置 -&gt; 打开开关</p>
<h4 id="_3-charles设置proxy" tabindex="-1"><a class="header-anchor" href="#_3-charles设置proxy" aria-hidden="true">#</a> 3.Charles设置Proxy</h4>
<p>点击 Proxy -&gt; SSL Proxying Settings
勾选Enable SSL Proxying，点击Add
Host填写：example.com
Port填写：443</p>
<h4 id="_4-进行https抓包" tabindex="-1"><a class="header-anchor" href="#_4-进行https抓包" aria-hidden="true">#</a> 4.进行HTTPS抓包</h4>
<p>让手机重新发送https请求，可看到抓包
注意：不抓包请关闭手机HTTP代理，否则断开与电脑连接后会连不上网。</p>
</div></template>
