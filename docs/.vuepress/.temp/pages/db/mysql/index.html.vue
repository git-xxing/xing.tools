<template><div><h1 id="基础理论" tabindex="-1"><a class="header-anchor" href="#基础理论" aria-hidden="true">#</a> 基础理论</h1>
<h2 id="事物" tabindex="-1"><a class="header-anchor" href="#事物" aria-hidden="true">#</a> 事物</h2>
<h3 id="事物特性" tabindex="-1"><a class="header-anchor" href="#事物特性" aria-hidden="true">#</a> 事物特性</h3>
<p>ACID 原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）<br>
原子性：保证事物为最小单元不可切分<br>
一致性：保证事物要么全部成功，要么全部失败<br>
隔离性：当前事物不能被其他事物影响<br>
持久性：事物一旦提交就是永久储存</p>
<h3 id="事物隔离级别" tabindex="-1"><a class="header-anchor" href="#事物隔离级别" aria-hidden="true">#</a> 事物隔离级别</h3>
<p>读未提交（READ UNCOMMITTED）<br>
读提交 （READ COMMITTED）<br>
可重复读 （REPEATABLE READ）<br>
串行化 （SERIALIZABLE）</p>
<p>脏读：读取到了其他事物未提交的数据。<br>
幻读：幻读一般出现在新增场景，例如更新某个表全部数据时，此时另外一个事物提交了一条新数据，而更新操作以及执行完，但是有一条数据没有更新到。
可重复读：在同一事物内，多次执行同一查询语句，查询的结果是一致的。<br>
不可重复读：.....查询的结果是不一致的</p>
<table>
<thead>
<tr>
<th></th>
<th>脏读</th>
<th>不可重复读</th>
<th>幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td>读未提交</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>读提交</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>可重复读</td>
<td>❌</td>
<td>❌</td>
<td>✅</td>
</tr>
<tr>
<td>串行化</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
</tbody>
</table>
<h2 id="关键字执行顺序" tabindex="-1"><a class="header-anchor" href="#关键字执行顺序" aria-hidden="true">#</a> 关键字执行顺序</h2>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">FROM</span> <span class="token operator">&lt;</span>left_table<span class="token operator">></span>
<span class="token keyword">ON</span> <span class="token operator">&lt;</span>join_condition<span class="token operator">></span>
<span class="token operator">&lt;</span>join_type<span class="token operator">></span> <span class="token keyword">JOIN</span> <span class="token operator">&lt;</span>right_table<span class="token operator">></span>
<span class="token keyword">WHERE</span> <span class="token operator">&lt;</span>where_condition<span class="token operator">></span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token operator">&lt;</span>group_by_list<span class="token operator">></span>
<span class="token keyword">HAVING</span> <span class="token operator">&lt;</span>having_condition<span class="token operator">></span>
<span class="token keyword">SELECT</span>
<span class="token keyword">DISTINCT</span> <span class="token operator">&lt;</span>select_list<span class="token operator">></span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token operator">&lt;</span>order_by_condition<span class="token operator">></span>
<span class="token keyword">LIMIT</span> <span class="token operator">&lt;</span>limit_number<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="on与where的区别" tabindex="-1"><a class="header-anchor" href="#on与where的区别" aria-hidden="true">#</a> on与where的区别</h2>
<p>数据库在关联多张表时会生成一个临时表，left/right join时会<code v-pre>忽略on里的条件</code>，将主表的所有记录先放到临时表里，这时on里的多个条件就失效了。<br>
where是在<code v-pre>关联后再做的匹配</code>，即对笛卡尔积做一个匹配，所以能匹配出正确的结果。
只有 left/right/full join时会有这种情况。
inner join 下on和where结果一致没区别。</p>
<h2 id="exists与in的区别" tabindex="-1"><a class="header-anchor" href="#exists与in的区别" aria-hidden="true">#</a> exists与in的区别</h2>
<p>in的条件是某一个字段是否匹配，exists的条件是个boolean。
in先查询子表再将查询结果以参数形式给到外表，exists先查询外表再迭代所有记录根据exists判断是否要显示该记录。
in一般适用外表数据量较大内表数据量较小场景。
exists一般适用外表数据量较小内表数据量较大场景</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> A <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> B<span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> A <span class="token keyword">where</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span> <span class="token keyword">from</span> B <span class="token keyword">where</span> B<span class="token punctuation">.</span>id <span class="token operator">=</span> A<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="窗口函数" tabindex="-1"><a class="header-anchor" href="#窗口函数" aria-hidden="true">#</a> 窗口函数</h2>
<p>窗口函数是MySQL8提供的新特性</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>函数 <span class="token keyword">OVER</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> 字段名 <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 字段名 <span class="token keyword">ASC</span><span class="token operator">|</span><span class="token keyword">DESC</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
函数 <span class="token keyword">OVER</span> 窗口名 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> WINDOW 窗口名 <span class="token keyword">AS</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> 字段名 <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 字段名 <span class="token keyword">ASC</span><span class="token operator">|</span><span class="token keyword">DESC</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>OVER 关键字指定函数窗口的范围,如果省略后面括号中的内容，则窗口会包含满足WHERE条件的所有记录，窗口函数会基于所 有满足WHERE条件的记录进行计算。 如果OVER关键字后面的括号不为空，则可以使用如下语法设置窗口。<br>
窗口名:为窗口设置一个别名，用来标识窗口。<br>
PARTITION BY子句:指定窗口函数按照哪些字段进行分组。分组后，窗口函数可以在每个分组中分 别执行。<br>
ORDER BY子句:指定窗口函数按照哪些字段进行排序。执行排序操作使窗口函数按照排序后的数据 记录的顺序进行编号。<br>
FRAME子句:为分区中的某个子集定义规则，可以用来作为滑动窗口使用</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 
    <span class="token operator">*</span>
<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> 
    ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span><span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> category_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> price <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> row_num<span class="token punctuation">,</span> id<span class="token punctuation">,</span> category_id<span class="token punctuation">,</span> category<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> price<span class="token punctuation">,</span> stock
<span class="token keyword">FROM</span> goods<span class="token punctuation">)</span> t


<span class="token keyword">SELECT</span> RANK<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> w <span class="token keyword">AS</span> r<span class="token punctuation">,</span> PERCENT_RANK<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> w <span class="token keyword">AS</span> pr<span class="token punctuation">,</span> id<span class="token punctuation">,</span> category_id<span class="token punctuation">,</span> category<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> price<span class="token punctuation">,</span> stock
<span class="token keyword">FROM</span> goods
<span class="token keyword">WHERE</span> category_id <span class="token operator">=</span> <span class="token number">1</span> 
WINDOW w <span class="token keyword">AS</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> category_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> price <span class="token keyword">DESC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑架构" tabindex="-1"><a class="header-anchor" href="#逻辑架构" aria-hidden="true">#</a> 逻辑架构</h2>
<p>客户端 --&gt; 连接管理  --&gt; 解析与优化 --&gt; 存储引擎</p>
<p>连接管理
服务层
引擎层</p>
<p>sql -&gt; 分析器 语法/语义分析 --&gt; 优化器 逻辑优化/物理优化 --&gt; 执行器</p>
<p>存储引擎区别
Myasim /innodb  innodb支持事物 innodb 支持行锁   myasim性能较快</p>
<p>缓冲池</p>
<h2 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h2>
<p>MySQL的索引包括普通索引、唯一性索引、全文索引、单列索引、多列索引和空间索引等。</p>
<ul>
<li>从<code v-pre>功能逻辑</code>上说，索引有4种，分别是<code v-pre>普通索引</code> <code v-pre>唯一索引</code> <code v-pre>主键索引</code> <code v-pre>全文索引</code></li>
<li>从<code v-pre>物理层面说</code>索引可以分为<code v-pre>聚簇索引</code> <code v-pre>非聚簇索引</code>.</li>
</ul>
<h2 id="mvcc及实现原理" tabindex="-1"><a class="header-anchor" href="#mvcc及实现原理" aria-hidden="true">#</a> MVCC及实现原理</h2>
<h2 id="锁升级" tabindex="-1"><a class="header-anchor" href="#锁升级" aria-hidden="true">#</a> 锁升级</h2>
<ul>
<li>MySQL行锁只能加载索引上，如果操作不走索引则会升为表锁。</li>
<li>非唯一索引上记录数超过一定数量时，行锁也会升级为表锁。（索引数量达到1/2时会锁全表）</li>
</ul>
</div></template>
