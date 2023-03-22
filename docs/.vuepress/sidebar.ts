import type { SidebarConfig } from "vuepress-theme-gungnir";

export const sidebar: SidebarConfig = {
    "/java/":[
        {
            text: '基础',
            collapsible: true,
            children: [
                "/java/base/",
                "/java/base/io",
                "/java/base/exception",
                "/java/base/annotation",
                "/java/base/reflection",
                "/java/base/serialize",
                "/java/base/reference",

            ],
        },
        {
            text: '集合',
            collapsible: true,
            children: [
                "/java/collections/",
                "/java/collections/list",
                "/java/collections/set",
                "/java/collections/map",
            ],
        },
        {
            text: '多线程',
            collapsible: true,
            children: [
                "/java/thread/",
                "/java/thread/keyword",
                "/java/thread/pool",
                "/java/thread/atomic",
                "/java/thread/future",
                "/java/thread/local",
                "/java/thread/virtual",
            ],
        },
        {
            text: 'JVM',
            collapsible: true,
            children: [
                "/java/jvm/",
            ],
        },
        {
            text: '新特性',
            collapsible: true,
            children: [
                "/java/features/",
                "/java/features/java8",
                "/java/features/java11",
                "/java/features/java17",
            ],
        },
        {
            text: '设计模式',
            collapsible: true,
            children: [
                "/java/designPattern/create/",
                "/java/designPattern/structural/",
                "/java/designPattern/behavioral/",
            ],
        },
        {
            text: '数据结构与算法',
            collapsible: true,
            children: [
                "/java/structure/",
                "/java/structure/bTree",
                "/java/structure/b+Tree",
                "/java/structure/redBlackTree",
                "/java/structure/skipList",
            ],
        },
    ],
    "/frame/": [
        {
            text: 'Spring',
            collapsible: true,
            children: [
                "/frame/spring/",
            ],
        },
        {
            text: 'SpringBoot',
            collapsible: true,
            children: [
                "/frame/springBoot/",
            ],
        },
        {
            text: 'SpringSecurity',
            collapsible: true,
            children: [
                "/frame/springBoot/",
            ],
        },
        {
            text: 'SpringCloud',
            collapsible: true,
            children: [
                "/frame/springCloud/",
            ],
        },
        {
            text: 'MyBatis',
            collapsible: true,
            children: [
                "/frame/mybatis/",
            ],
        },
        {
            text: 'MyBatisPlus',
            collapsible: true,
            children: [
                "/frame/mybatisPlus/",
            ],
        },
        {
            text: 'Netty',
            collapsible: true,
            children: [
                "/frame/netty/",
            ],
        },

    ],
    "/ms/": [
        {
            text: '基础理论',
            collapsible: true,
            children: [
                "/ms/",
            ],
        },
        {
            text: '相关组件',
            collapsible: true,
            children: [
                "/frame/spring/",
            ],
        },
    ],
    "/db/": [
        {
            text: 'MySQL',
            collapsible: true,
            children: [
                "/db/mysql/",
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
    ],
    "/middleware/": [
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
        {
            text: 'ElasticSearch',
            collapsible: true,
            children: [
                "/middleware/es/",
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
            text: 'JDK',
            collapsible: true,
            children: [
                "/ops/jdk/install",
            ],
        },
        {
            text: 'Git',
            collapsible: true,
            children: [
                "/ops/git/",
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
        {
            text: 'Zookeeper',
            collapsible: true,
            children: [
                "/ops/zookeeper/install",
            ],
        },
        {
            text: 'Redis',
            collapsible: true,
            children: [
                "/ops/redis/install",
            ],
        },
    ],
    "/tools/": [
        {
            text: '工具',
            children: [
                "/tools/charles",
                "/tools/v2ray",
                "/tools/ideaPlugins"
            ],
        },
    ],
}
