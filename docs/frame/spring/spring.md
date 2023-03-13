# 简介

## Spring 是怎么解决循环依赖的
三级缓存，提前曝光。

## 事务的传播级别
Spring事务定义了7种传播机制:
- propagation-requierd：如果当前没有事务，就新建一个事务，如果已存在一个事务中，则加入到这个事务中，这个是默认选项。
- propagation-supports：如果当前有事务，则支持当前事务，如果当前没有事务，就以非事务方法执行。
- propagation-mandatory：如果当前有事务，则使用当前的事务，如果没有当前事务，就抛出异常。
- propagation-required_new：无论当前有没有事务，都要新建事务，如果当前存在事务，把当前事务挂起。
- propagation-not_supported：以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。
- propagation-never：以非事务方式执行操作，如果当前事务存在则抛出异常。
- propagation-nested：如果当前存在事务，则作为子事务在嵌套事务内执行。如果当前没有事务，则执行与propagation_required类似的操作

## Spring事物失效场景
- 数据库引擎不支持事务
- 没有被 Spring 管理
- 方法不是 public 的
- 自身调用问题
- 数据源没有配置事务管理器
- 异常被吃了
- 异常类型错误