# MySQL安装与部署

## 普通方式安装
##  [安装方法](https://dev.mysql.com/downloads/mysql/)
<CodeGroup>
<CodeGroupItem title="yum" active>

```
wget http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql-community-server 
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```
</CodeGroupItem>
</CodeGroup>


## 集群安装


