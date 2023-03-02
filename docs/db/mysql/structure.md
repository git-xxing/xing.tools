---
date: 2022-10-26 23:34:59
---
# 逻辑架构
## 服务器处理客户端请求
那服务器进程对客户端进程发送的请求做了什么处理，才能产生最后的处理结果呢?这里以查询请求为
例展示:

![16667685424392](https://oss.xing.tools/2022/10/26/16667685424392.jpg)

下面具体展开看一下:
![16667686712686](https://oss.xing.tools/2022/10/26/16667686712686.jpg)


## SQL执行流程
SQL 语句在 MySQL 中的流程是: SQL语句→查询缓存→解析器→优化器→执行器 。
```mermaidjs
flowchart LR
    SQL语句 --> 分析器
    subgraph 分析器
    direction RL
    语法分析
    语义检查
    end
    subgraph 优化器
    direction RL
    逻辑优化
    物理优化
    end
    分析器 -->|语法分析树| 优化器 -->|查询计划| 执行器 --> 执行结果
```


![16667687944874](https://oss.xing.tools/2022/10/26/16667687944874.jpg)
## SQL语法顺序
```mermaidjs
flowchart LR
    FROM --> ON --> JOIN --> WHERE --> A[GROUP BY] --> C[SUM/AVG...] --> HAVING --> SELECT --> B[ORDER BY] --> LIMIT
```


## 缓冲池（buffer pool）
`InnoDB`存储引擎是以`页`为单位来管理存储空间的，我们进行CRUD本质上都是在读/写页面。而磁盘的i/o效率比较慢，在内存中操作效率会快很多，为了能让数据表或者索引中的数据能随时为我所用，DBMS会申请占用内存来作为数据缓冲池，在真正访问页面之前，把磁盘是的页缓存到内存中的buffer pool.

