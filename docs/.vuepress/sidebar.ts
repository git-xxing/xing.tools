import type { SidebarConfig } from "vuepress-theme-gungnir";

export const sidebar: SidebarConfig = {
    "/java/":[
        {
            text: '基础',
            children: [
                "/java/serialize",
                "/java/io",
                "/java/exception",
                "/java/annotation",
                "/java/features",
            ],
        },
        {
            text: '集合',
            children: [
                "/java/collection",
                "/java/list",
                "/java/map",
                "/java/set",
            ],
        },
        {
            text: '并发',
            children: [
                "/java/thread",
            ],
        },
        {
            text: 'JVM',
            children: [
                "/java/jvm",
            ],
        },
        {
            text: '数据结构与算法',
            children: [
                "/java/structure",
            ],
        },
    ],
    "/frame/": [
        {
            text: 'Spring',
            children: [
                "/frame/spring/transaction",
                "/frame/spring/aop",
            ],
        },
        {
            text: 'SpringBoot',
            children: [
                "/frame/spring/boot-annotation",
                "/frame/spring/boot-autoconfigure",
            ],
        },
        {
            text: 'SpringCloud',
            children: [
                "/frame/spring/spring-cloud",
            ],
        },
        {
            text: 'MyBatis',
            children: [
                "/frame/mybatis/mybatis",
            ],
        },
        {
            text: 'MyBatisPlus',
            children: [
                "/frame/mybatis/mybatis-plus",
            ],
        },

    ],
    "/db/": [
        {
            text: 'MySQL',
            children: [
                "/db/mysql/transaction",
                "/db/mysql/indexes",
                "/db/mysql/storage-engine",
                "/db/mysql/structure",
            ],
        },
        {
            text: 'Oracle',
            children: [
                "/db/oracle/",
            ],
        },
        {
            text: 'Redis',
            children: [
                "/db/redis/data-types",
                "/db/redis/commands",
                "/db/redis/transaction",
                "/db/redis/persistence",
                "/db/redis/pattern",
            ],
        },
        {
            text: 'MongoDB',
            children: [
                "/db/mongodb/",
            ],
        },
        {
            text: 'ElasticSearch',
            children: [
                "/db/es/",
            ],
        },
    ],
    "/middleware/": [
        {
            text: 'Nacos',
            children: [
                "/middleware/nacos/",
            ],
        },
        {
            text: 'RocketMQ',
            children: [
                "/middleware/rocket/",
            ],
        },
        {
            text: 'Kafka',
            children: [
                "/middleware/kafka/",
            ],
        },
        {
            text: 'ShardingSphere',
            children: [
                "/middleware/sharding/",
            ],
        },
    ],
    "/web/": [
        {
            text: 'JavaScript',
            children: [
                "/web/js/",
            ],
        },
        {
            text: 'TypeScript',
            children: [
                "/web/ts/",
            ],
        },
        {
            text: 'Vue',
            children: [
                "/web/vue/",
            ],
        },
    ],
    "/ops/": [
        {
            text: 'Java',
            children: [
                "/ops/java/install",
            ],
        },
        {
            text: 'Git',
            children: [
                "/ops/git/install",
                "/ops/git/ssh-keys",
            ],
        },
        {
            text: 'Nginx',
            children: [
                "/ops/nginx/install",
            ],
        },
        {
            text: 'Docker',
            children: [
                "/ops/docker/install",
            ],
        },
        {
            text: 'Harbor',
            children: [
                "/ops/harbor/install",
            ],
        },
        {
            text: 'Nexus',
            children: [
                "/ops/nexus/install",
            ],
        },
        {
            text: 'Jenkins',
            children: [
                "/ops/jenkins/install",
            ],
        },
        {
            text: 'MySQL',
            children: [
                "/ops/mysql/install",
            ],
        },
        {
            text: 'Nacos',
            children: [
                "/ops/nacos/install",
            ],
        },
        {
            text: 'RocketMQ',
            children: [
                "/ops/rocket/install",
            ],
        },
        {
            text: 'Kafka',
            children: [
                "/ops/kafka/install",
            ],
        },
        {
            text: 'ShardingSphere',
            children: [
                "/ops/sharding/install",
            ],
        },
        {
            text: 'ElasticSearch',
            children: [
                "/ops/es/install",
            ],
        },
        {
            text: 'Zookeeper',
            children: [
                "/ops/zookeeper/install",
            ],
        },
        {
            text: 'Redis',
            children: [
                "/ops/redis/install",
            ],
        },
    ],

}
