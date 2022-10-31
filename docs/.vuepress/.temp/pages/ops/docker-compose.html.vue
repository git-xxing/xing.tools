<template><div><h1 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<ul>
<li>安装前请先安装 <RouterLink to="/ops/docker.html">Docker</RouterLink></li>
</ul>
<CodeGroup>
<CodeGroupItem title="yum" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">sudo</span> yum update
 <span class="token function">sudo</span> yum <span class="token function">install</span> docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGrpupItem title="apt-get" >
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">sudo</span> <span class="token function">apt-get</span> update
 <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></CodeGrpupItem>
</CodeGroup>
<ul>
<li>查看版本号</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">docker</span> compose version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
