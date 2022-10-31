<template><div><h1 id="jmm" tabindex="-1"><a class="header-anchor" href="#jmm" aria-hidden="true">#</a> JMM</h1>
<h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2>
<p>面向过程：函数是调用
面向对象：万物皆对象，封装继承多态</p>
<h2 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h2>
<ul>
<li>序列化：把对象转化为可传输的字节序列过程称为序列化。</li>
<li>反序列化：把字节序列还原为对象的过程称为反序列化。</li>
<li>为什么要序列化？跨平台存储，和进行网络传输，持久化对象。</li>
</ul>
<h2 id="serialversionuid" tabindex="-1"><a class="header-anchor" href="#serialversionuid" aria-hidden="true">#</a> serialVersionUID</h2>
<ul>
<li>当在反序列化时JVM需要判断需要转化的两个类是不是同一个类，于是就需要一个序列化版本号。如果在反序列化的时候两个类的serialVersionUID不一样则JVM会抛出java.io.InvalidClassException的异常；如果serialVersionUID一致则表明可以转换。</li>
<li>如果可序列化类未显式声明 serialVersionUID，则序列化运行时将基于该类的各个方面计算该类的默认 serialVersionUID 值。</li>
</ul>
<h2 id="java的四种引用-强弱软虚" tabindex="-1"><a class="header-anchor" href="#java的四种引用-强弱软虚" aria-hidden="true">#</a> Java的四种引用（强弱软虚）</h2>
<ul>
<li>强引用：即<code v-pre>new Object();</code>方式，该方式即使出现OOM对象也不会被回收。</li>
<li>软引用：即<code v-pre>new SoftReference&lt;Object&gt;(new Object());</code>方式，内存不足时会被回收</li>
<li>弱引用：即<code v-pre>new WeakReference&lt;Object&gt;(new Object());</code>方式，只要GC发现了它就会被回收</li>
<li>虚引用：即<code v-pre>new PhantomReference&lt;Object&gt;(new Object(), new ReferenceQueue&lt;&gt;());</code>,虚引用的回收方式与弱引用差不多，但是它被回收之前，会被放入 ReferenceQueue 中。注意哦，其它引用是被JVM回收后才被传入 ReferenceQueue 中的。由于这个机制，所以虚引用大多被用于引用销毁前的处理工作。还有就是，虚引用创建的时候，必须带有 ReferenceQueue</li>
</ul>
<h2 id="java创建对象的方式" tabindex="-1"><a class="header-anchor" href="#java创建对象的方式" aria-hidden="true">#</a> Java创建对象的方式</h2>
<ul>
<li>new</li>
<li>反射</li>
<li>clone</li>
<li>序列化</li>
</ul>
<h2 id="hash冲突解决方案" tabindex="-1"><a class="header-anchor" href="#hash冲突解决方案" aria-hidden="true">#</a> Hash冲突解决方案</h2>
<ul>
<li>拉链法：每个hash表节点都有一个next指针，对个哈市表节点可以用next指针构成一个单向立案别，被分配到同一个hash节点可以用这个单向链表进行存储</li>
<li>开放定址法: 一旦发生冲突，就去寻找下一个空的散列地址，</li>
<li>再hash：发生冲突时调用第二个第三个...hash函数，直至无冲突。
HashMap采用拉链法</li>
</ul>
<h2 id="深拷贝与浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝与浅拷贝" aria-hidden="true">#</a> 深拷贝与浅拷贝</h2>
<p>浅拷贝：只复制对象属性
深拷贝：除去对象本身属性，引用的属性也会被复制一遍。</p>
<h2 id="io与nio的区别" tabindex="-1"><a class="header-anchor" href="#io与nio的区别" aria-hidden="true">#</a> IO与NIO的区别</h2>
<p>它两的作用是一样的，都是将数据读取/或写入磁盘。实现方式不一样。nio主要是非阻塞形。。。</p>
<h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h2>
<p>根据类名获取到这个类所有的属性与方法</p>
<ul>
<li>优点: 动态获取</li>
<li>缺点: 性能较差</li>
</ul>
<h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2>
<h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h2>
<h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2>
<h2 id="反射-1" tabindex="-1"><a class="header-anchor" href="#反射-1" aria-hidden="true">#</a> 反射</h2>
<h2 id="spi" tabindex="-1"><a class="header-anchor" href="#spi" aria-hidden="true">#</a> SPI</h2>
</div></template>
