<template><div><h1 id="事物" tabindex="-1"><a class="header-anchor" href="#事物" aria-hidden="true">#</a> 事物</h1>
<h2 id="事物的定义" tabindex="-1"><a class="header-anchor" href="#事物的定义" aria-hidden="true">#</a> 事物的定义</h2>
<p>在执行多条sql时，要么全部成功、要么全部失败。这种把多条语句作为一个整体进行操作的功能，被称为数据库事务。</p>
<h2 id="事物的特性" tabindex="-1"><a class="header-anchor" href="#事物的特性" aria-hidden="true">#</a> 事物的特性</h2>
<ul>
<li>原子性（Atomicity）：将所有SQL作为原子工作单元执行，要么全部执行，要么全部不执行；</li>
<li>一致性（Consistency）：事务完成后，所有数据的状态都是一致的，即A账户只要减去了100，B账户则必定加上了100；</li>
<li>隔离性（Isolation）：如果有多个事务并发执行，每个事务作出的修改必须与其他事务隔离；</li>
<li>持久性（Durability）：即事务完成后，对数据库数据的修改被持久化存储。</li>
</ul>
<h2 id="事物的隔离级别" tabindex="-1"><a class="header-anchor" href="#事物的隔离级别" aria-hidden="true">#</a> 事物的隔离级别</h2>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>事物的隔离级别主要是解决以下几种情况</p>
<ul>
<li>脏读:读取到了其他事物未提交的数据。</li>
<li>不可重复读:同一事物内同一sql多次查询，结果是不一致的，不管别的事物有没有修改该数据。</li>
<li>幻读:同一sqlA事物执行了两次，中间B事物插入了N条数据，导致A事物第二次查询结果与第一次查询结果不一致。</li>
</ul>
</div>
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
<td>可重复读（默认）</td>
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
<h2 id="mysql有没有解决幻读" tabindex="-1"><a class="header-anchor" href="#mysql有没有解决幻读" aria-hidden="true">#</a> MySQL有没有解决幻读</h2>
</div></template>
