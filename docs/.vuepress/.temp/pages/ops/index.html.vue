<template><div><h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1>
<ul>
<li>常用运维命令</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    <span class="token comment"># 直接杀死目标进程</span>
    <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> demo.jar <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $2}'</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span> -9<span class="token punctuation">;</span>
    <span class="token comment"># 后台运行.jar文件</span>
    <span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> demo.jar <span class="token parameter variable">--spring.profiles.complete</span><span class="token operator">=</span>dev  <span class="token operator">></span> demo.log <span class="token operator">&amp;</span>
    
    <span class="token comment"># Redis客户端连接命令</span>
    redis-cli <span class="token parameter variable">-h</span> <span class="token number">1.2</span>.3.4 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-a</span> <span class="token string">"password"</span>
    <span class="token comment"># Redis客户端批量删除Key</span>
    redis-cli KEYS <span class="token string">"user*"</span> <span class="token operator">|</span> <span class="token function">xargs</span> redis-cli DEL 
    
    <span class="token comment"># MySQL客户端连接命令</span>
    mysql <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.0.201 <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token number">123</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
