<template><div><h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> <a href="http://nginx.org/en/linux_packages.html#RHEL-CentOS" target="_blank" rel="noopener noreferrer">安装</a></h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1.添加源默认情况Centos7中无Nginx的源，最近发现Nginx官网提供了Centos的源地址。因此可以如下执行命令添加源</span>
<span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

<span class="token comment"># 2.安装Nginx</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx

<span class="token comment"># 3.启动&amp;自启</span>
systemctl start nginx
systemctl <span class="token builtin class-name">enable</span> nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置ssl证书" tabindex="-1"><a class="header-anchor" href="#配置ssl证书" aria-hidden="true">#</a> 配置ssl证书</h2>
<ul>
<li>1.<a href="https://yundun.console.aliyun.com/?spm=5176.ecscore_server_list.products-recent.dcas.66da4df5beQ8YB&amp;p=cas#/certExtend/free" target="_blank" rel="noopener noreferrer">申请证书（这里用阿里云）</a></li>
<li>2.创建证书目录&amp;将证书文件上传 <code v-pre>/etc/nginx/cert</code></li>
<li>3.修改配置文件 '/etc/nginx/conf.d/xxx.conf'</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#将所有HTTP请求通过rewrite重定向到HTTPS。</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name example.com<span class="token punctuation">;</span>
	rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>   
	location / <span class="token punctuation">{</span>
		index index.html index.htm<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
	 listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
	 server_name example.com<span class="token punctuation">;</span>
	 index index.html index.htm<span class="token punctuation">;</span>
	 ssl_certificate cert/4718047_example.com.pem<span class="token punctuation">;</span>  <span class="token comment">#将domain name.pem替换成您证书的文件名称。</span>
	 ssl_certificate_key cert/4718047_example.com.key<span class="token punctuation">;</span> <span class="token comment">#将domain name.key替换成您证书的密钥文件名称。</span>
	 ssl_session_timeout 5m<span class="token punctuation">;</span>
	 ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span> <span class="token comment">#使用此加密套件。</span>
	 ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span> <span class="token comment">#使用该协议进行配置。</span>
	 ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
	 
	 location /<span class="token punctuation">{</span>
		 proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
		 proxy_set_header remote-host-real-ip <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
		 proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
		 proxy_pass https://localhost<span class="token punctuation">;</span> 
	 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数配置" tabindex="-1"><a class="header-anchor" href="#参数配置" aria-hidden="true">#</a> 参数配置</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>user nobody<span class="token punctuation">;</span>
<span class="token comment">#启动进程,通常设置成和cpu的数量相等</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
 
<span class="token comment">#全局错误日志及PID文件</span>
<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>
 
<span class="token comment">#pid        logs/nginx.pid;</span>
 
<span class="token comment">#工作模式及连接数上限</span>
events <span class="token punctuation">{</span>
    <span class="token comment">#epoll是多路复用IO(I/O Multiplexing)中的一种方式,</span>
    <span class="token comment">#仅用于linux2.6以上内核,可以大大提高nginx的性能</span>
    use   epoll<span class="token punctuation">;</span> 
 
    <span class="token comment">#单个后台worker process进程的最大并发链接数    </span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
 
    <span class="token comment"># 并发总数是 worker_processes 和 worker_connections 的乘积</span>
    <span class="token comment"># 即 max_clients = worker_processes * worker_connections</span>
    <span class="token comment"># 在设置了反向代理的情况下，max_clients = worker_processes * worker_connections / 4  为什么</span>
    <span class="token comment"># 为什么上面反向代理要除以4，应该说是一个经验值</span>
    <span class="token comment"># 根据以上条件，正常情况下的Nginx Server可以应付的最大连接数为：4 * 8000 = 32000</span>
    <span class="token comment"># worker_connections 值的设置跟物理内存大小有关</span>
    <span class="token comment"># 因为并发受IO约束，max_clients的值须小于系统可以打开的最大文件数</span>
    <span class="token comment"># 而系统可以打开的最大文件数和内存大小成正比，一般1GB内存的机器上可以打开的文件数大约是10万左右</span>
    <span class="token comment"># 我们来看看360M内存的VPS可以打开的文件句柄数是多少：</span>
    <span class="token comment"># $ cat /proc/sys/fs/file-max</span>
    <span class="token comment"># 输出 34336</span>
    <span class="token comment"># 32000 &lt; 34336，即并发连接总数小于系统可以打开的文件句柄总数，这样就在操作系统可以承受的范围之内</span>
    <span class="token comment"># 所以，worker_connections 的值需根据 worker_processes 进程数目和系统可以打开的最大文件总数进行适当地进行设置</span>
    <span class="token comment"># 使得并发总数小于操作系统可以打开的最大文件数目</span>
    <span class="token comment"># 其实质也就是根据主机的物理CPU和内存进行配置</span>
    <span class="token comment"># 当然，理论上的并发总数可能会和实际有所偏差，因为主机还有其他的工作进程需要消耗系统资源。</span>
    <span class="token comment"># ulimit -SHn 65535</span>
 
<span class="token punctuation">}</span>
 
 
http <span class="token punctuation">{</span>
    <span class="token comment">#设定mime类型,类型由mime.type文件定义</span>
    include    mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
    <span class="token comment">#设定日志格式</span>
    log_format  main  <span class="token string">'$remote_addr - $remote_user [$time_local] "$request" '</span>
                      <span class="token string">'$status $body_bytes_sent "$http_referer" '</span>
                      <span class="token string">'"$http_user_agent" "$http_x_forwarded_for"'</span><span class="token punctuation">;</span>
 
    access_log  logs/access.log  main<span class="token punctuation">;</span>
 
    <span class="token comment">#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，</span>
    <span class="token comment">#对于普通应用，必须设为 on,</span>
    <span class="token comment">#如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，</span>
    <span class="token comment">#以平衡磁盘与网络I/O处理速度，降低系统的uptime.</span>
    sendfile     on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>
 
    <span class="token comment">#连接超时时间</span>
    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    tcp_nodelay     on<span class="token punctuation">;</span>
 
    <span class="token comment">#开启gzip压缩</span>
    <span class="token function">gzip</span>  on<span class="token punctuation">;</span>
    gzip_disable <span class="token string">"MSIE [1-6]."</span><span class="token punctuation">;</span>
 
    <span class="token comment">#设定请求缓冲</span>
    client_header_buffer_size    128k<span class="token punctuation">;</span>
    large_client_header_buffers  <span class="token number">4</span> 128k<span class="token punctuation">;</span>
 
 
    <span class="token comment">#设定虚拟主机配置</span>
    server <span class="token punctuation">{</span>
        <span class="token comment">#侦听80端口</span>
        listen    <span class="token number">80</span><span class="token punctuation">;</span>
        <span class="token comment">#定义使用 www.nginx.cn访问</span>
        server_name  www.nginx.cn<span class="token punctuation">;</span>
 
        <span class="token comment">#定义服务器的默认网站根目录位置</span>
        root html<span class="token punctuation">;</span>
 
        <span class="token comment">#设定本虚拟主机的访问日志</span>
        access_log  logs/nginx.access.log  main<span class="token punctuation">;</span>
 
        <span class="token comment">#默认请求</span>
        location / <span class="token punctuation">{</span>
            
            <span class="token comment">#定义首页索引文件的名称</span>
            index index.php index.html index.htm<span class="token punctuation">;</span>   
 
        <span class="token punctuation">}</span>
 
        <span class="token comment"># 定义错误提示页面</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
 
        <span class="token comment">#静态文件，nginx自己处理</span>
        location ~ ^/<span class="token punctuation">(</span>images<span class="token operator">|</span>javascript<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token operator">|</span>flash<span class="token operator">|</span>media<span class="token operator">|</span>static<span class="token punctuation">)</span>/ <span class="token punctuation">{</span>
            
            <span class="token comment">#过期30天，静态文件不怎么更新，过期可以设大一点，</span>
            <span class="token comment">#如果频繁更新，则可以设置得小一点。</span>
            expires 30d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token comment">#PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.</span>
        location ~ .php$ <span class="token punctuation">{</span>
            fastcgi_pass <span class="token number">127.0</span>.0.1:9000<span class="token punctuation">;</span>
            fastcgi_index index.php<span class="token punctuation">;</span>
            fastcgi_param  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span><span class="token punctuation">;</span>
            include fastcgi_params<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token comment">#禁止访问 .htxxx 文件</span>
            location ~ /.ht <span class="token punctuation">{</span>
            deny all<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
