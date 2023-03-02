# 持久化
## RDB
RDB（Redis DataBase）是通过在指定时间间隔内对数据进行快照，将数据保存到磁盘上的持久化方式。如果 Redis 服务器在运行期间意外终止，那么 RDB 可以被用来快速恢复数据。
## AOF
AOF（Append Only File）是把 Redis 服务器执行的每一个写命令（write command）追加到一个文件中的持久化方式。在 Redis 重启时，AOF 文件可以被用来重放，以恢复数据。AOF 保证了在 Redis 异常关闭时，任何未被持久化的写操作都不会丢失。

RDB 方式更加适合对性能有要求的场景，而 AOF 方式更加适合对数据完整性有要求的场景。用户可以根据自己的需要在两种持久化方式间进行选择。

## No Persistence：不进行持久化

## Hybrid Persistence