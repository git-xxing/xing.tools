<template><div><h1 id="安装与部署" tabindex="-1"><a class="header-anchor" href="#安装与部署" aria-hidden="true">#</a> 安装与部署</h1>
<h2 id="安装客户端" tabindex="-1"><a class="header-anchor" href="#安装客户端" aria-hidden="true">#</a> 安装客户端</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> git-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看远程仓库</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 添加远程仓库 </span>
<span class="token function">git</span> remote set-url <span class="token parameter variable">--add</span> origin https://gitee.com/gitxingtools/wiki.git 

<span class="token comment"># 删除远程仓库 </span>
<span class="token function">git</span> remote set-url <span class="token parameter variable">--delete</span> origin https://gitee.com/gitxingtools/wiki.git 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
