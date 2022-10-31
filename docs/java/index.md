---
date: 2022-10-26 23:34:59
---
# 基础
## 面向对象
面向过程：函数是调用
面向对象：万物皆对象，封装继承多态

## Java创建对象的方式
- new `new Object();`
- 反射 `Class.forName("com.test.User").newInstance();`
- clone `Object.clone()`
- 序列化 `ObjectInputStream.readObject();`

## 深拷贝与浅拷贝
浅拷贝：只复制对象属性
深拷贝：除去对象本身属性，引用的属性也会被复制一遍。

## Java的四种引用（强弱软虚）
- 强引用：即`new Object();`方式，该方式即使出现OOM对象也不会被回收。
- 软引用：即`new SoftReference<Object>(new Object());`方式，内存不足时会被回收
- 弱引用：即`new WeakReference<Object>(new Object());`方式，只要GC发现了它就会被回收
- 虚引用：即`new PhantomReference<Object>(new Object(), new ReferenceQueue<>());`,虚引用的回收方式与弱引用差不多，但是它被回收之前，会被放入 ReferenceQueue 中。注意哦，其它引用是被JVM回收后才被传入 ReferenceQueue 中的。由于这个机制，所以虚引用大多被用于引用销毁前的处理工作。还有就是，虚引用创建的时候，必须带有 ReferenceQueue

## 反射
根据类名获取到这个类所有的属性与方法
- 优点: 动态获取
- 缺点: 性能较差

## Hash冲突解决方案
- 拉链法：每个hash表节点都有一个next指针，对个哈市表节点可以用next指针构成一个单向立案别，被分配到同一个hash节点可以用这个单向链表进行存储
- 开放定址法: 一旦发生冲突，就去寻找下一个空的散列地址，
- 再hash：发生冲突时调用第二个第三个...hash函数，直至无冲突。
  HashMap采用拉链法

## 泛型
## 反射
## SPI
