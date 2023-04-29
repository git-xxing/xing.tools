---
date: 2023-04-27 17:03:41
---

# GitLab

::: tip
GitLab 是一个基于 Git 版本控制系统的 web 应用程序，提供了代码管理、代码审查、问题跟踪、持续集成等功能。GitLab 可以作为一个自托管的软件部署在您自己的服务器上，也可以使用 GitLab.com 提供的在线服务。
:::

## 1.安装依赖
```shell

sudo apt-get update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl

```

遇到配置冲突检查区别，无特殊配置保持本地配置即可。
![16826051277651](https://oss.xing.tools/2023/04/27/16826051277651.jpg)

## 2.添加gitlab仓库并安装
```shell
# 下载gitlab镜像
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```
## 3.添加一个域名解析到主机 
例: `https://gitlab.example.com` 安装程序将自动配置改url到gitlab。若配置的协议为`https`则会[自动申请证书](https://docs.gitlab.com/omnibus/settings/ssl/index.html#lets-encrypthttpsletsencryptorg-integration)。
```shell
# 安装gitlab
 sudo EXTERNAL_URL="https://gitlab.example.com" apt-get install gitlab-ee
```
除非在安装时指定密码，否则将为`root`随机生成密码，密码在`/etc/gitlab/initial_root_password`，该密码会保存24小时。可通过[管理页面](https://gitlab.example.com/-/profile/password/edit)修改。
