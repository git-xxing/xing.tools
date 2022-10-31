<template><div><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> <a href="https://docs.docker.com/engine/install/centos/" target="_blank" rel="noopener noreferrer">安装</a></h2>
<CodeGroup>
  <CodeGroupItem title="yum" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1.安装yum-utils包（提供yum-config-manager ）并设置存储库</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\</span>
    --add-repo <span class="token punctuation">\</span>
    https://download.docker.com/linux/centos/docker-ce.repo
    
<span class="token comment"># 2.安装 Docker 引擎</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin

<span class="token comment"># 3.搜索docker版本</span>
yum list docker-ce  <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span>  <span class="token parameter variable">-r</span>

<span class="token comment"># 4.install</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce.x86_64

<span class="token comment"># 5.查看docker状态&amp;版本</span>
systemctl  status <span class="token function">docker</span>
<span class="token function">docker</span> version

<span class="token comment"># 6.配置镜像加速（可选）</span>
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">'EOF'
{
  "registry-mirrors": ["https://k4l5nnwv.mirror.aliyuncs.com"]
}
EOF</span>


<span class="token comment"># 7.若修改镜像需要重启Docker</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>  

<span class="token comment"># 8.启动&amp;添加自启</span>
systemctl start <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="package">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1.前往https://download.docker.com/linux/centos/ 并选择您的 CentOS 版本。然后浏览x86_64/stable/Packages/ 并下载.rpm要安装的 Docker 版本的文件。</span>

<span class="token comment"># 2.安装 Docker Engine</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> /path/to/package.rpm

<span class="token comment"># 3.启动 Docker</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>

<span class="token comment"># 4.hello-world 通过运行映像来验证 Docker 引擎是否已正确安装。</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2>
<CodeGroup>
<CodeGroupItem title="yum" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1.卸载 Docker Engine、CLI、Containerd 和 Docker Compose 软件包</span>
<span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io docker-compose-plugin

<span class="token comment"># 2.主机上的映像、容器、卷或自定义配置文件不会自动删除。要删除所有映像、容器和卷</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查询所有镜像</span>
<span class="token function">docker</span> images

<span class="token comment"># 查询所有容器(不加-a查询所有运行中的容器)</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>CONTAINERID OR NAMES<span class="token punctuation">]</span> /bin/bash

<span class="token comment"># 查询日志</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">"2017-05-31"</span> <span class="token parameter variable">--tail</span><span class="token operator">=</span><span class="token number">10</span> <span class="token punctuation">[</span>CONTAINERID OR NAMES<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用属性配置" tabindex="-1"><a class="header-anchor" href="#常用属性配置" aria-hidden="true">#</a> 常用属性配置</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token parameter variable">-a</span> stdin: 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；

-d: 后台运行容器，并返回容器ID；

-i: 以交互模式运行容器，通常与 <span class="token parameter variable">-t</span> 同时使用；

-P: 随机端口映射，容器内部端口随机映射到主机的端口

-p: 指定端口映射，格式为：主机<span class="token punctuation">(</span>宿主<span class="token punctuation">)</span>端口:容器端口

-t: 为容器重新分配一个伪输入终端，通常与 <span class="token parameter variable">-i</span> 同时使用；

<span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">"nginx-lb"</span><span class="token builtin class-name">:</span> 为容器指定一个名称；

<span class="token parameter variable">--dns</span> <span class="token number">8.8</span>.8.8: 指定容器使用的DNS服务器，默认和宿主一致；

--dns-search example.com: 指定容器DNS搜索域名，默认和宿主一致；

<span class="token parameter variable">-h</span> <span class="token string">"mars"</span><span class="token builtin class-name">:</span> 指定容器的hostname；

<span class="token parameter variable">-e</span> <span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">"ritchie"</span><span class="token builtin class-name">:</span> 设置环境变量；

--env-file<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>: 从指定文件读入环境变量；

<span class="token parameter variable">--cpuset</span><span class="token operator">=</span><span class="token string">"0-2"</span> or <span class="token parameter variable">--cpuset</span><span class="token operator">=</span><span class="token string">"0,1,2"</span><span class="token builtin class-name">:</span> 绑定容器到指定CPU运行；

<span class="token parameter variable">-m</span> :设置容器使用内存最大值；

<span class="token parameter variable">--net</span><span class="token operator">=</span><span class="token string">"bridge"</span><span class="token builtin class-name">:</span> 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；

<span class="token parameter variable">--link</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>: 添加链接到另一个容器；

<span class="token parameter variable">--expose</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>: 开放一个端口或一组端口；

<span class="token parameter variable">--volume</span> , -v: 绑定一个卷
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker4种网络模式" tabindex="-1"><a class="header-anchor" href="#docker4种网络模式" aria-hidden="true">#</a> Docker4种网络模式</h2>
<details class="custom-container details"><summary>Docker4种网络模式</summary>
</details>
</div></template>
