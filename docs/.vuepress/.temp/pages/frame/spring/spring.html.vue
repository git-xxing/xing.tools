<template><div><h1 id="sringmvc" tabindex="-1"><a class="header-anchor" href="#sringmvc" aria-hidden="true">#</a> SringMVC</h1>
<h2 id="spring-是怎么解决循环依赖的" tabindex="-1"><a class="header-anchor" href="#spring-是怎么解决循环依赖的" aria-hidden="true">#</a> Spring 是怎么解决循环依赖的</h2>
<p>三级缓存，提前曝光。</p>
<h2 id="事务的传播级别" tabindex="-1"><a class="header-anchor" href="#事务的传播级别" aria-hidden="true">#</a> 事务的传播级别</h2>
<p>Spring事务定义了7种传播机制:</p>
<ul>
<li>propagation-requierd：如果当前没有事务，就新建一个事务，如果已存在一个事务中，则加入到这个事务中，这个是默认选项。</li>
<li>propagation-supports：如果当前有事务，则支持当前事务，如果当前没有事务，就以非事务方法执行。</li>
<li>propagation-mandatory：如果当前有事务，则使用当前的事务，如果没有当前事务，就抛出异常。</li>
<li>propagation-required_new：无论当前有没有事务，都要新建事务，如果当前存在事务，把当前事务挂起。</li>
<li>propagation-not_supported：以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。</li>
<li>propagation-never：以非事务方式执行操作，如果当前事务存在则抛出异常。</li>
<li>propagation-nested：如果当前存在事务，则作为子事务在嵌套事务内执行。如果当前没有事务，则执行与propagation_required类似的操作</li>
</ul>
<h2 id="spring事物失效场景" tabindex="-1"><a class="header-anchor" href="#spring事物失效场景" aria-hidden="true">#</a> Spring事物失效场景</h2>
<ul>
<li>数据库引擎不支持事务</li>
<li>没有被 Spring 管理</li>
<li>方法不是 public 的</li>
<li>自身调用问题</li>
<li>数据源没有配置事务管理器</li>
<li>异常被吃了</li>
<li>异常类型错误</li>
</ul>
</div></template>
