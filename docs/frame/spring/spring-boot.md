# SpringBoot
## Spring Boot的核心注解是哪个?它主要由哪几个注解组成
- @SpringBootApplication
- @SpringBootConfiguration:组合了 @Configuration 注解，实现配置文件的功能。 
- @EnableAutoConfiguration:打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能:@SpringBootApplication(exclude={ DataSourceAutoConfiguration.class})
- @ComponentScan:Spring组件扫描。
