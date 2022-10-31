# 简介 
- 常用运维命令
```shell
    # 直接杀死目标进程
    ps -ef | grep demo.jar | grep -v grep | awk '{print $2}' | xargs kill -9;
    # 后台运行.jar文件
    nohup java -jar demo.jar --spring.profiles.complete=dev  > demo.log &
    
    # Redis客户端连接命令
    redis-cli -h 1.2.3.4 -p 6379 -a "password"
    # Redis客户端批量删除Key
    redis-cli KEYS "user*" | xargs redis-cli DEL 
    
    # MySQL客户端连接命令
    mysql -h 192.168.0.201 -P 3306 -u root -p 123  
``` 
