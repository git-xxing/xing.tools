---
date: 2022-10-26 23:34:59
---
# 序列化
## 什么是序列化&反序列化
- Java中将对象转换为字节码的过程称之为序列化。
- 将字节码转换为Java对象的过程称为反序列化。

## 为什么要序列化
- 跨平台存储，进行网络传输，将对象持久化到磁盘。

## serialVersionUID的作用
JVM在反序列化的时候根据`serialVersionUID`来判断是否是同一个版本，如果在反序列化的时候两个serialVersionUID`不一致`JVM会抛出java.io.InvalidClassException的异常。

如果未显式声明 serialVersionUID，则序列化运行时将基于该类的各个方面计算该类的默认serialVersionUID值。

static属性不能被序列化，序列化保存对象的状态，static属于类状态
transient修饰的不能被序列化


| 类   | 字段 | serialVersionUID | 结果                                                        |
|------|------|------------------|:------------------------------------------------------------|
| 不同 | 相同 | 相同             | java.lang.ClassCastException 类型不一致                      |
| 相同 | 相同 | 不同             | java.io.InvalidClassException                               |
| 相同 | 增加 | 相同             | 反序列化成功，新增字段值为null，原始数据类型的字段会给默认值。 |
| 相同 | 减少 | 相同             | 反序列化成功，减少字段会丢失。                                |
| 相同 | 增加 | 未定义             | java.io.InvalidClassException                                |
| 相同 | 减少 | 未定义             | java.io.InvalidClassException                                |
| 相同 | 字段不变，新增方法 | 未定义             | java.io.InvalidClassException                                |

## [序列化的方式](https://cloud.tencent.com/developer/article/1446854)
- java.io.Serializable
- com.alibaba.fastjson.serializer
- Kryo
- Hessian
- Protocol Buffers