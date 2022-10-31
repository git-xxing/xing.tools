# 基础理论
## 事物
### 事物特性
ACID 原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）     
原子性：保证事物为最小单元不可切分   
一致性：保证事物要么全部成功，要么全部失败       
隔离性：当前事物不能被其他事物影响   
持久性：事物一旦提交就是永久储存



### 事物隔离级别
读未提交（READ UNCOMMITTED）  
读提交 （READ COMMITTED）    
可重复读 （REPEATABLE READ）  
串行化 （SERIALIZABLE）

脏读：读取到了其他事物未提交的数据。  
幻读：幻读一般出现在新增场景，例如更新某个表全部数据时，此时另外一个事物提交了一条新数据，而更新操作以及执行完，但是有一条数据没有更新到。
可重复读：在同一事物内，多次执行同一查询语句，查询的结果是一致的。   
不可重复读：.....查询的结果是不一致的

|      | 脏读  | 不可重复读 | 幻读  |
|------|-----|-------|-----|
| 读未提交 | ✅   | ✅     | ✅   |
| 读提交  | ❌   | ✅     | ✅   |
| 可重复读 | ❌   | ❌     | ✅   |
| 串行化  | ❌   | ❌     | ❌   |

## 关键字执行顺序
```sql
FROM <left_table>
ON <join_condition>
<join_type> JOIN <right_table>
WHERE <where_condition>
GROUP BY <group_by_list>
HAVING <having_condition>
SELECT
DISTINCT <select_list>
ORDER BY <order_by_condition>
LIMIT <limit_number>
```


## on与where的区别
数据库在关联多张表时会生成一个临时表，left/right join时会`忽略on里的条件`，将主表的所有记录先放到临时表里，这时on里的多个条件就失效了。  
where是在`关联后再做的匹配`，即对笛卡尔积做一个匹配，所以能匹配出正确的结果。
只有 left/right/full join时会有这种情况。
inner join 下on和where结果一致没区别。

## exists与in的区别
in的条件是某一个字段是否匹配，exists的条件是个boolean。
in先查询子表再将查询结果以参数形式给到外表，exists先查询外表再迭代所有记录根据exists判断是否要显示该记录。
in一般适用外表数据量较大内表数据量较小场景。
exists一般适用外表数据量较小内表数据量较大场景
```sql
select * from A where id in (select id from B)
select * from A where exists (select 1 from B where B.id = A.id)
```

## 窗口函数
窗口函数是MySQL8提供的新特性
```sql
函数 OVER([PARTITION BY 字段名 ORDER BY 字段名 ASC|DESC])
函数 OVER 窗口名 ... WINDOW 窗口名 AS ([PARTITION BY 字段名 ORDER BY 字段名 ASC|DESC])
```
OVER 关键字指定函数窗口的范围,如果省略后面括号中的内容，则窗口会包含满足WHERE条件的所有记录，窗口函数会基于所 有满足WHERE条件的记录进行计算。 如果OVER关键字后面的括号不为空，则可以使用如下语法设置窗口。    
窗口名:为窗口设置一个别名，用来标识窗口。   
PARTITION BY子句:指定窗口函数按照哪些字段进行分组。分组后，窗口函数可以在每个分组中分 别执行。  
ORDER BY子句:指定窗口函数按照哪些字段进行排序。执行排序操作使窗口函数按照排序后的数据 记录的顺序进行编号。  
FRAME子句:为分区中的某个子集定义规则，可以用来作为滑动窗口使用  

```sql
SELECT 
    *
FROM (
    SELECT 
    ROW_NUMBER() OVER(PARTITION BY category_id ORDER BY price DESC) AS row_num, id, category_id, category, NAME, price, stock
FROM goods) t


SELECT RANK() OVER w AS r, PERCENT_RANK() OVER w AS pr, id, category_id, category, NAME, price, stock
FROM goods
WHERE category_id = 1 
WINDOW w AS (PARTITION BY category_id ORDER BY price DESC);
```


## 逻辑架构
 
客户端 --> 连接管理  --> 解析与优化 --> 存储引擎

连接管理
服务层
引擎层


sql -> 分析器 语法/语义分析 --> 优化器 逻辑优化/物理优化 --> 执行器

存储引擎区别
Myasim /innodb  innodb支持事物 innodb 支持行锁   myasim性能较快

缓冲池

## 索引类型
MySQL的索引包括普通索引、唯一性索引、全文索引、单列索引、多列索引和空间索引等。
- 从`功能逻辑`上说，索引有4种，分别是`普通索引` `唯一索引` `主键索引` `全文索引`
- 从`物理层面说`索引可以分为`聚簇索引` `非聚簇索引`.

## MVCC及实现原理


## 锁升级
- MySQL行锁只能加载索引上，如果操作不走索引则会升为表锁。
- 非唯一索引上记录数超过一定数量时，行锁也会升级为表锁。（索引数量达到1/2时会锁全表）

