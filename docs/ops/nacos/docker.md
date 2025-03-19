---
date: 2025-03-19 18:40:15
---

# Docker 方式部署
## 拉取镜像
```shell
docker pull nacos/nacos-server
# M1芯片拉取
docker pull nacos/nacos-server:v2.3.2-slim
```

## 启动
```shell
docker run --name nacos-quick -e MODE=standalone -e SPRING_DATASOURCE_PLATFORM=mysql \
-e MYSQL_SERVICE_HOST=127.0.0.1 \
-e MYSQL_SERVICE_PORT=3306 \
-e MYSQL_SERVICE_DB_NAME=nacos \
-e MYSQL_SERVICE_USER=nacos \
-e MYSQL_SERVICE_PASSWORD=nacos \
-e NACOS_AUTH_ENABLE=true \
-e NACOS_AUTH_TOKEN=MDVjMTJhMjg3MzM0Mzg2Yzk0MTMxYWI4YWEwMGQwOGE= \
-e NACOS_AUTH_IDENTITY_KEY=nacos \
-e NACOS_AUTH_IDENTITY_VALUE=nacos \
-p 8848:8848 -p 9848:9848 -p 9849:9849 -d nacos/nacos-server:v2.3.2-slim
```