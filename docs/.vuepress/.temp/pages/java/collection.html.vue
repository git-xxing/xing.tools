<template><div><h1 id="collection" tabindex="-1"><a class="header-anchor" href="#collection" aria-hidden="true">#</a> Collection</h1>
<h2 id="collection-1" tabindex="-1"><a class="header-anchor" href="#collection-1" aria-hidden="true">#</a> Collection</h2>
<h3 id="list-map-set三者区别" tabindex="-1"><a class="header-anchor" href="#list-map-set三者区别" aria-hidden="true">#</a> List Map Set三者区别</h3>
<ul>
<li>List：有序可重复可为null</li>
<li>Map: 键值对存储，无序可重复</li>
<li>Set:无序，不可重复</li>
</ul>
<h3 id="arraylist与linkedlist的区别" tabindex="-1"><a class="header-anchor" href="#arraylist与linkedlist的区别" aria-hidden="true">#</a> ArrayList与LinkedList的区别</h3>
<p>ArrayList基于数组实现，LinkedList基于双链表实现。
ArrayList读取速度较快，LinkedList增删数据较快。</p>
<h3 id="hashmap-hashtable-concurrenthashmap区别" tabindex="-1"><a class="header-anchor" href="#hashmap-hashtable-concurrenthashmap区别" aria-hidden="true">#</a> HashMap HashTable ConcurrentHashMap区别</h3>
<table>
<thead>
<tr>
<th>父类</th>
<th>HashMap</th>
<th style="text-align:left">HashTable</th>
<th style="text-align:left">ConcurrentHashMap</th>
</tr>
</thead>
<tbody>
<tr>
<td>线程安全</td>
<td>❌</td>
<td style="text-align:left">✅</td>
<td style="text-align:left">✅</td>
</tr>
<tr>
<td>父类</td>
<td>AbstractMap</td>
<td style="text-align:left">Dictionary</td>
<td style="text-align:left">AbstractMap</td>
</tr>
<tr>
<td>性能</td>
<td>⭐️⭐️⭐️</td>
<td style="text-align:left">⭐️</td>
<td style="text-align:left">⭐️⭐️</td>
</tr>
<tr>
<td>null支持</td>
<td>✅</td>
<td style="text-align:left">❌</td>
<td style="text-align:left">✅</td>
</tr>
</tbody>
</table>
<p>HashTable是基于synchronized实现线程安全，所有在性能上弱于ConcurrentHashMap,
ConcurrentHashMap在1.8以前是基于分段锁实现线程安全，1.8以后是基于</p>
<h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h2>
<h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2>
<h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2>
<h3 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap" aria-hidden="true">#</a> HashMap</h3>
<p>数量在8以下时采用数组实现，当数据量达到8个时会转换成红黑树。因为可以降低时间复杂度o(logN)</p>
</div></template>
