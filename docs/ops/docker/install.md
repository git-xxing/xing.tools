---
date: 2022-10-25 22:48:45
---
# 安装与部署


## [安装](https://docs.docker.com/engine/install/centos/)

<CodeGroup>
<CodeGroupItem title="apt">

```shell
# 卸载旧版本
sudo apt-get remove docker docker-engine docker.io containerd runc
# 更新apt包索引并安装包以允许apt通过 HTTPS 使用存储库
sudo apt-get update

sudo apt-get install ca-certificates curl  gnupg lsb-release
    
# 添加 Docker 的官方 GPG 密钥
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg


```

</CodeGroupItem>
<CodeGroupItem title="yum">

```shell
# 1.安装yum-utils包（提供yum-config-manager ）并设置存储库
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
    
# 2.安装 Docker 引擎
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 3.搜索docker版本
yum list docker-ce  --showduplicates | sort  -r

# 4.install
yum -y install docker-ce.x86_64

# 5.查看docker状态&版本
systemctl  status docker
docker version

# 6.配置镜像加速（可选）
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://k4l5nnwv.mirror.aliyuncs.com"]
}
EOF


# 7.若修改镜像需要重启Docker
systemctl daemon-reload
systemctl restart docker  

# 8.启动&添加自启
systemctl start docker
systemctl enable docker
```

</CodeGroupItem>

<CodeGroupItem title="package">

```bash
# 1.前往https://download.docker.com/linux/centos/ 并选择您的 CentOS 版本。然后浏览x86_64/stable/Packages/ 并下载.rpm要安装的 Docker 版本的文件。

# 2.安装 Docker Engine
sudo yum install /path/to/package.rpm

# 3.启动 Docker
sudo systemctl start docker

# 4.hello-world 通过运行映像来验证 Docker 引擎是否已正确安装。
sudo docker run hello-world
```

</CodeGroupItem>
</CodeGroup>


## 卸载
<CodeGroup>
<CodeGroupItem title="yum" active>

```shell
# 1.卸载 Docker Engine、CLI、Containerd 和 Docker Compose 软件包
sudo yum remove docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 2.主机上的映像、容器、卷或自定义配置文件不会自动删除。要删除所有映像、容器和卷
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

</CodeGroupItem>
</CodeGroup>



## 常用命令
```shell
# 查询所有镜像
docker images

# 查询所有容器(不加-a查询所有运行中的容器)
docker ps -a

# 进入容器
docker exec -it [CONTAINERID OR NAMES] /bin/bash

# 查询日志
docker logs -f -t --since="2017-05-31" --tail=10 [CONTAINERID OR NAMES]

```

## 常用属性配置
```shell
-a stdin: 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；

-d: 后台运行容器，并返回容器ID；

-i: 以交互模式运行容器，通常与 -t 同时使用；

-P: 随机端口映射，容器内部端口随机映射到主机的端口

-p: 指定端口映射，格式为：主机(宿主)端口:容器端口

-t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；

--name="nginx-lb": 为容器指定一个名称；

--dns 8.8.8.8: 指定容器使用的DNS服务器，默认和宿主一致；

--dns-search example.com: 指定容器DNS搜索域名，默认和宿主一致；

-h "mars": 指定容器的hostname；

-e username="ritchie": 设置环境变量；

--env-file=[]: 从指定文件读入环境变量；

--cpuset="0-2" or --cpuset="0,1,2": 绑定容器到指定CPU运行；

-m :设置容器使用内存最大值；

--net="bridge": 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；

--link=[]: 添加链接到另一个容器；

--expose=[]: 开放一个端口或一组端口；

--volume , -v: 绑定一个卷
```

##  Docker4种网络模式
::: details Docker4种网络模式

:::
