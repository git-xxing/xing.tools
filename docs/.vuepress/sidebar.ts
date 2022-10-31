import type { SidebarConfig } from "vuepress-theme-gungnir";

export const sidebar: SidebarConfig = {
    "/java/":[
        {
            text: '基础',
            collapsible: true,
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
            collapsible: true,
            children: [
                "/java/collection",
                "/java/list",
                "/java/map",
                "/java/set",
            ],
        },
        {
            text: '并发',
            collapsible: true,
            children: [
                "/java/thread",
            ],
        },
        {
            text: 'JVM',
            collapsible: true,
            children: [
                "/java/jvm",
            ],
        },
    ],
    "/frame/": [
        {
            text: 'Spring',
            collapsible: true,
            children: [
                "/frame/spring/transaction",
                "/frame/spring/aop",
            ],
        },
        {
            text: 'SpringBoot',
            collapsible: true,
            children: [
                "/frame/spring/boot-annotation",
                "/frame/spring/boot-autoconfigure",
            ],
        },
        {
            text: 'SpringCloud',
            collapsible: true,
            children: [
                "/frame/spring/spring-cloud",
            ],
        },
        {
            text: 'MyBatis',
            collapsible: true,
            children: [
                "/frame/mybatis/mybatis",
            ],
        },
        {
            text: 'MyBatisPlus',
            collapsible: true,
            children: [
                "/frame/mybatis/mybatis-plus",
            ],
        },

    ],
    "/db/": [
        {
            text: 'MySQL',
            collapsible: true,
            children: [
                "/db/mysql/transaction",
                "/db/mysql/indexes",
                "/db/mysql/storage-engine",
                "/db/mysql/structure",
            ],
        },
        {
            text: 'Oracle',
            collapsible: true,
            children: [
                "/db/oracle/",
            ],
        },
        {
            text: 'Redis',
            collapsible: true,
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
            collapsible: true,
            children: [
                "/db/mongodb/",
            ],
        },
        {
            text: 'ElasticSearch',
            collapsible: true,
            children: [
                "/db/es/",
            ],
        },
    ],
    "/middleware/": [
        {
            text: 'Nacos',
            collapsible: true,
            children: [
                "/middleware/nacos/",
            ],
        },
        {
            text: 'RocketMQ',
            collapsible: true,
            children: [
                "/middleware/rocket/",
            ],
        },
        {
            text: 'Kafka',
            collapsible: true,
            children: [
                "/middleware/kafka/",
            ],
        },
        {
            text: 'ShardingSphere',
            collapsible: true,
            children: [
                "/middleware/sharding/",
            ],
        },
    ],
    "/web/": [
        {
            text: 'JavaScript',
            collapsible: true,
            children: [
                "/web/js/",
            ],
        },
        {
            text: 'TypeScript',
            collapsible: true,
            children: [
                "/web/ts/",
            ],
        },
        {
            text: 'Vue',
            collapsible: true,
            children: [
                "/web/vue/",
            ],
        },
    ],
    "/ops/": [
        {
            text: 'Git',
            collapsible: true,
            children: [
                "/ops/git/install",
                "/ops/git/ssh-keys",
            ],
        },
        {
            text: 'Nginx',
            collapsible: true,
            children: [
                "/ops/nginx/install",
            ],
        },
        {
            text: 'Docker',
            collapsible: true,
            children: [
                "/ops/docker/install",
            ],
        },
        {
            text: 'Harbor',
            collapsible: true,
            children: [
                "/ops/harbor/install",
            ],
        },
        {
            text: 'Nexus',
            collapsible: true,
            children: [
                "/ops/nexus/install",
            ],
        },
        {
            text: 'Jenkins',
            collapsible: true,
            children: [
                "/ops/jenkins/install",
            ],
        },
        {
            text: 'MySQL',
            collapsible: true,
            children: [
                "/ops/mysql/install",
            ],
        },
        {
            text: 'Nacos',
            collapsible: true,
            children: [
                "/ops/nacos/install",
            ],
        },
        {
            text: 'RocketMQ',
            collapsible: true,
            children: [
                "/ops/rocket/install",
            ],
        },
        {
            text: 'Kafka',
            collapsible: true,
            children: [
                "/ops/kafka/install",
            ],
        },
        {
            text: 'ShardingSphere',
            collapsible: true,
            children: [
                "/ops/sharding/install",
            ],
        },
        {
            text: 'ElasticSearch',
            collapsible: true,
            children: [
                "/ops/es/install",
            ],
        },

    ],

}
