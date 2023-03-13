# 简介
## Collection
### List Map Set三者区别
- List：有序可重复可为null
- Map: 键值对存储，无序可重复
- Set:无序，不可重复

### ArrayList与LinkedList的区别
ArrayList基于数组实现，LinkedList基于双链表实现。
ArrayList读取速度较快，LinkedList增删数据较快。
### HashMap HashTable ConcurrentHashMap区别

| 父类     | HashMap     | HashTable  | ConcurrentHashMap |
|----------|-------------|:-----------|:------------------|
| 线程安全 | ❌           | ✅          | ✅                 |
| 父类     | AbstractMap | Dictionary | AbstractMap       |
| 性能     | ⭐️⭐️⭐️      | ⭐️         | ⭐️⭐️              |
| null支持  | ✅           | ❌         | ✅             |

HashTable是基于synchronized实现线程安全，所有在性能上弱于ConcurrentHashMap,
ConcurrentHashMap在1.8以前是基于分段锁实现线程安全，1.8以后是基于

## List
## Set
## Map
### HashMap
数量在8以下时采用数组实现，当数据量达到8个时会转换成红黑树。因为可以降低时间复杂度o(logN)


