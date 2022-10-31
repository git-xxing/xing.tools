<template><div><h1 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h1>
<h2 id="什么是序列化-反序列化" tabindex="-1"><a class="header-anchor" href="#什么是序列化-反序列化" aria-hidden="true">#</a> 什么是序列化&amp;反序列化</h2>
<ul>
<li>Java中将对象转换为字节码的过程称之为序列化。</li>
<li>将字节码转换为Java对象的过程称为反序列化。</li>
</ul>
<h2 id="为什么要序列化" tabindex="-1"><a class="header-anchor" href="#为什么要序列化" aria-hidden="true">#</a> 为什么要序列化</h2>
<ul>
<li>跨平台存储，进行网络传输，将对象持久化到磁盘。</li>
</ul>
<h2 id="serialversionuid的作用" tabindex="-1"><a class="header-anchor" href="#serialversionuid的作用" aria-hidden="true">#</a> serialVersionUID的作用</h2>
<p>JVM在反序列化的时候根据<code v-pre>serialVersionUID</code>来判断是否是同一个版本，如果在反序列化的时候两个serialVersionUID<code v-pre>不一致</code>JVM会抛出java.io.InvalidClassException的异常。</p>
<p>如果未显式声明 serialVersionUID，则序列化运行时将基于该类的各个方面计算该类的默认serialVersionUID值。</p>
<p>static属性不能被序列化，序列化保存对象的状态，static属于类状态
transient修饰的不能被序列化</p>
<table>
<thead>
<tr>
<th>类</th>
<th>字段</th>
<th>serialVersionUID</th>
<th style="text-align:left">结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>不同</td>
<td>相同</td>
<td>相同</td>
<td style="text-align:left">java.lang.ClassCastException 类型不一致</td>
</tr>
<tr>
<td>相同</td>
<td>相同</td>
<td>不同</td>
<td style="text-align:left">java.io.InvalidClassException</td>
</tr>
<tr>
<td>相同</td>
<td>增加</td>
<td>相同</td>
<td style="text-align:left">反序列化成功，新增字段值为null，原始数据类型的字段会给默认值。</td>
</tr>
<tr>
<td>相同</td>
<td>减少</td>
<td>相同</td>
<td style="text-align:left">反序列化成功，减少字段会丢失。</td>
</tr>
<tr>
<td>相同</td>
<td>增加</td>
<td>未定义</td>
<td style="text-align:left">java.io.InvalidClassException</td>
</tr>
<tr>
<td>相同</td>
<td>减少</td>
<td>未定义</td>
<td style="text-align:left">java.io.InvalidClassException</td>
</tr>
<tr>
<td>相同</td>
<td>字段不变，新增方法</td>
<td>未定义</td>
<td style="text-align:left">java.io.InvalidClassException</td>
</tr>
</tbody>
</table>
<h2 id="序列化的方式" tabindex="-1"><a class="header-anchor" href="#序列化的方式" aria-hidden="true">#</a> <a href="https://cloud.tencent.com/developer/article/1446854" target="_blank" rel="noopener noreferrer">序列化的方式</a></h2>
<ul>
<li>java.io.Serializable</li>
<li>com.alibaba.fastjson.serializer</li>
<li>Kryo</li>
<li>Hessian</li>
<li>Protocol Buffers</li>
</ul>
</div></template>
