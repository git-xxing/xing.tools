<template><div><h1 id="openssl" tabindex="-1"><a class="header-anchor" href="#openssl" aria-hidden="true">#</a> OpenSSL</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> <a href="https://www.openssl.org/" target="_blank" rel="noopener noreferrer">安装</a></h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1.下载安装包</span>
<span class="token function">wget</span> https://www.openssl.org/source/openssl-3.0.5.tar.gz

<span class="token comment"># 2.新建目录 '/usr/local/ssl'</span>
<span class="token function">mkdir</span> /usr/local/ssl

<span class="token comment"># 3.解压安装包</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> openssl-3.0.5.tar.gz

<span class="token comment"># 4.安装</span>
./config <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/ssl
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> 

<span class="token comment"># 5.创建软链接</span>
<span class="token function">which</span> openssl /usr/local/ssl/bin/openssl

<span class="token comment"># 6.查看版本</span>
openssl version

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
