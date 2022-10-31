<template><div><h1 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h1>
<h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2>
<h2 id="cas" tabindex="-1"><a class="header-anchor" href="#cas" aria-hidden="true">#</a> CAS</h2>
<p>CAS的全称为Compare-And-Swap，直译就是对比交换。是一条CPU的原子指令，其作用是让CPU先进行比较两个值是否相等，然后原子地更新某个位置的值，经过调查发现，其实现方式是基于硬件平台的汇编指令，就是说CAS是靠硬件实现的，JVM只是封装了汇编调用，那些AtomicInteger类便是使用了这些封装后的接口。
简单解释：CAS操作需要输入两个数值，一个旧值(期望操作前的值)和一个新值，在操作期间先比较下在旧值有没有发生变化，如果没有发生变化，才交换成新值，发生了变化则不交换。 CAS操作是原子性的，所以多线程并发使用CAS更新数据时，可以不使用锁。JDK中大量使用了CAS来更新数据而防止加锁(synchronized 重量级锁)来保持原子更新。</p>
<h2 id="cas缺点" tabindex="-1"><a class="header-anchor" href="#cas缺点" aria-hidden="true">#</a> CAS缺点</h2>
<ul>
<li>ABA问题:比如说一个线程one从内存位置V中取出A，这时候另一个线程two也从内存中取出A，并且two进行了一些操作变成了B，然后two又将V位置的数据变成A，这时候线程one进行CAS操作发现内存中仍然是A，然后one操作成功。尽管线程one的CAS操作成功，但可能存在</li>
<li>循环时间长开销大:对于资源竞争严重(线程冲突严重)的情况，CAS自旋的概率会比较大从而浪费更多的CPU资源，效率低于synchronized。</li>
<li>只能保证一个共享变量的原子操作:当对一个共享变量执行操作时，我们可以使用循环CAS的方式来保证原子操作，但是对多个共享变量操作时，循环CAS就无法保证操作的原子性，这个 时候就可以用锁。</li>
</ul>
<h2 id="aqs" tabindex="-1"><a class="header-anchor" href="#aqs" aria-hidden="true">#</a> AQS</h2>
<p>简单说一下AQS，AQS全称为AbstractQueuedSychronizer，翻译过来应该是抽象队列同步器。 ReentrantLock、CountDownLatch、Semaphore等等都用到了它。AQS实际上以双向队列的形式 列，前面一个线程使用ReentrantLock好了，则双向队列实际上的第一个Entry开始运行。 以根据自己的实现重写tryLock和tryRelease方法，以实现自己的并发功能。</p>
<h2 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h2>
<h3 id="线程池中submit-和-execute-方法有什么区别" tabindex="-1"><a class="header-anchor" href="#线程池中submit-和-execute-方法有什么区别" aria-hidden="true">#</a> 线程池中submit() 和 execute()方法有什么区别?</h3>
<p>两个方法都可以向线程池提交任务，execute()方法的返回类型是void，它定义在Executor接口中,而submit()方法可以返回持有计算结果的Future对象，它定义在ExecutorService接口中，它扩展了Executor接口，其它线程池类像ThreadPoolExecutor和ScheduledThreadPoolExecutor都有这些方法。</p>
<h3 id="线程池中队列常用类型有哪些" tabindex="-1"><a class="header-anchor" href="#线程池中队列常用类型有哪些" aria-hidden="true">#</a> 线程池中队列常用类型有哪些?</h3>
<p>ArrayBlockingQueue 是一个基于数组结构的有界阻塞队列，此队列按 FIFO(先进先出)原则对元素进行排序
LinkedBlockingQueue 一个基于链表结构的阻塞队列，此队列按FIFO (先进先出) 排序元素，吞吐量通常要高于 ArrayBlockingQueue 。</p>
<h3 id="线程安全需要保证几个基本特征" tabindex="-1"><a class="header-anchor" href="#线程安全需要保证几个基本特征" aria-hidden="true">#</a> 线程安全需要保证几个基本特征</h3>
<ul>
<li>原子性，简单说就是相关操作不会中途被其他线程干扰，一般通过同步机制实现。</li>
<li>可见性，是一个线程修改了某个共享变量，其状态能够立即被其他线程知晓，通常被解释为将线程本地状态反映到主内存上，volatile 就是负责保证可见性的。</li>
<li>有序性，是保证线程内串行语义，避免指令重排等。</li>
</ul>
<h3 id="线程之间是如何通信的" tabindex="-1"><a class="header-anchor" href="#线程之间是如何通信的" aria-hidden="true">#</a> 线程之间是如何通信的</h3>
<p>线程之间的通信有两种方式:共享内存和消息传递。</p>
<h3 id="threadlocal原理" tabindex="-1"><a class="header-anchor" href="#threadlocal原理" aria-hidden="true">#</a> ThreadLocal原理</h3>
<p>ThreadLocal可以理解为线程本地变量，他会在每个线程都创建一个副本，那么在线程之间访问内部 ThreadLocal有一个静态内部类ThreadLocalMap，ThreadLocalMap又包含了一个Entry数组，</p>
<h3 id="线程池的拒绝策略有哪些" tabindex="-1"><a class="header-anchor" href="#线程池的拒绝策略有哪些" aria-hidden="true">#</a> 线程池的拒绝策略有哪些</h3>
<p>主要有4种拒绝策略:</p>
<ul>
<li>AbortPolicy:直接丢弃任务，抛出异常，这是默认策略</li>
<li>CallerRunsPolicy:只用调用者所在的线程来处理任务</li>
<li>DiscardOldestPolicy:丢弃等待队列中最旧的任务，并执行当前任务</li>
<li>DiscardPolicy:直接丢弃任务，也不抛出异常</li>
</ul>
<h2 id="autowired和resource关键字的区别" tabindex="-1"><a class="header-anchor" href="#autowired和resource关键字的区别" aria-hidden="true">#</a> Autowired和Resource关键字的区别</h2>
<p>Autowired用byName方式注入，是spring的注解
Resource用ByName方式注入，是java的注解</p>
</div></template>
