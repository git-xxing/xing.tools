<template><div><h1 id="mysql安装与部署" tabindex="-1"><a class="header-anchor" href="#mysql安装与部署" aria-hidden="true">#</a> MySQL安装与部署</h1>
<h2 id="普通方式安装" tabindex="-1"><a class="header-anchor" href="#普通方式安装" aria-hidden="true">#</a> 普通方式安装</h2>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> <a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">安装方法</a></h2>
<CodeGroup>
<CodeGroupItem title="yum" active>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql-community-server 
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="集群安装" tabindex="-1"><a class="header-anchor" href="#集群安装" aria-hidden="true">#</a> 集群安装</h2>
</div></template>
