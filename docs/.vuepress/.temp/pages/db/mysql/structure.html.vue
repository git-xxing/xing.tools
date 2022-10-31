<template><div><h1 id="逻辑架构" tabindex="-1"><a class="header-anchor" href="#逻辑架构" aria-hidden="true">#</a> 逻辑架构</h1>
<h2 id="服务器处理客户端请求" tabindex="-1"><a class="header-anchor" href="#服务器处理客户端请求" aria-hidden="true">#</a> 服务器处理客户端请求</h2>
<p>那服务器进程对客户端进程发送的请求做了什么处理，才能产生最后的处理结果呢?这里以查询请求为
例展示:</p>
<p><img src="https://oss.xing.tools/2022/10/26/16667685424392.jpg" alt="16667685424392"></p>
<p>下面具体展开看一下:
<img src="https://oss.xing.tools/2022/10/26/16667686712686.jpg" alt="16667686712686"></p>
<h2 id="sql执行流程" tabindex="-1"><a class="header-anchor" href="#sql执行流程" aria-hidden="true">#</a> SQL执行流程</h2>
<p>SQL 语句在 MySQL 中的流程是: SQL语句→查询缓存→解析器→优化器→执行器 。</p>
<p><img src="https://oss.xing.tools/2022/10/26/16667688707680.jpg" alt="16667688707680"></p>
<p><img src="https://oss.xing.tools/2022/10/26/16667687944874.jpg" alt="16667687944874"></p>
<h2 id="sql语法顺序" tabindex="-1"><a class="header-anchor" href="#sql语法顺序" aria-hidden="true">#</a> SQL语法顺序</h2>
<p>FROM &lt;left_table&gt;
ON &lt;join_condition&gt;</p>
<join_type> JOIN <right_table>
WHERE <where_condition>
GROUP BY <group_by_list>
HAVING <having_condition>
SELECT
DISTINCT <select_list>
ORDER BY <order_by_condition>
LIMIT <limit_number>
<h2 id="缓冲池-buffer-pool" tabindex="-1"><a class="header-anchor" href="#缓冲池-buffer-pool" aria-hidden="true">#</a> 缓冲池（buffer pool）</h2>
<p><code v-pre>InnoDB</code>存储引擎是以<code v-pre>页</code>为单位来管理存储空间的，我们进行CRUD本质上都是在读/写页面。而磁盘的i/o效率比较慢，在内存中操作效率会快很多，为了能让数据表或者索引中的数据能随时为我所用，DBMS会申请占用内存来作为数据缓冲池，在真正访问页面之前，把磁盘是的页缓存到内存中的buffer pool.</p>
</div></template>
