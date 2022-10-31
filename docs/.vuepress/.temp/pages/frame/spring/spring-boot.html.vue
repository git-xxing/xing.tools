<template><div><h1 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot" aria-hidden="true">#</a> SpringBoot</h1>
<h2 id="spring-boot的核心注解是哪个-它主要由哪几个注解组成" tabindex="-1"><a class="header-anchor" href="#spring-boot的核心注解是哪个-它主要由哪几个注解组成" aria-hidden="true">#</a> Spring Boot的核心注解是哪个?它主要由哪几个注解组成</h2>
<ul>
<li>@SpringBootApplication</li>
<li>@SpringBootConfiguration:组合了 @Configuration 注解，实现配置文件的功能。</li>
<li>@EnableAutoConfiguration:打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能:@SpringBootApplication(exclude={ DataSourceAutoConfiguration.class})</li>
<li>@ComponentScan:Spring组件扫描。</li>
</ul>
</div></template>
