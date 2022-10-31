# OpenSSL
## [安装](https://www.openssl.org/)
```shell
# 1.下载安装包
wget https://www.openssl.org/source/openssl-3.0.5.tar.gz

# 2.新建目录 '/usr/local/ssl'
mkdir /usr/local/ssl

# 3.解压安装包
tar -zxvf openssl-3.0.5.tar.gz

# 4.安装
./config --prefix=/usr/local/ssl
make && make install 

# 5.创建软链接
which openssl /usr/local/ssl/bin/openssl

# 6.查看版本
openssl version

```
