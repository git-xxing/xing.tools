# 安装
:::tip
`node-v18.11.0` `yarn-1.22.19`
:::
## 创建文件夹并初始化项目
```shell
mkdir blog && cd blog
yarn init  # or: npm init
```
## 安装VuePress & 主题
```shell
yarn add vuepress@2.0.0-beta.49 vuepress-theme-gungnir@next
```
## 添加`中添加`script
```shell
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
## 忽略临时目录
```shell
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
echo '.vuepress/dist' >> .gitignore
echo '.idea' >> .gitignore
```
## 创建`config.ts` `navbar.ts` `sidebar.ts`并设置主题
```shell
mkdir docs & mkdir docs/.vuepress

tee docs/.vuepress/navbar.ts <<-'EOF'
import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
    {
        text: '首页',
        link: '/java/',
    },
    {
        text: '关于',
        link: '/about/',
    },
]
EOF



tee docs/.vuepress/sidebar.ts <<-'EOF'
import type { SidebarConfig } from "vuepress-theme-gungnir";

export const sidebar: SidebarConfig = {
    "/about/":[
        {
            text: '关于',
            collapsible: true,
            children: [
                "/about",
            ],
        },
        ]
}
EOF


tee docs/.vuepress/config.ts <<-'EOF'
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";
import { navbar} from "./navbar";
import { sidebar} from "./sidebar";

export default defineUserConfig({
    theme: gungnirTheme({
        navbarTitle: "Xing",
        repo: "gitxingtools/xing.tools",
        docsDir: "docs",
        personalInfo: {
            name: "Xing",
            avatar: "/avatar.png",
            description: "温故而知新，可以为师矣。",
            sns: {
                github: "gitxingtools",
                email: "email@xing.tools",
                rss: "/rss.xml",
            }
        },
        locales: {
            "/": {
                navbar: navbar,
                sidebar: sidebar
            }
        },
        homeHeaderImages: [
            {
                path: "/bg.svg",
            }
        ],
        themePlugins: {
            katex: true,
            mermaid: true,
            chartjs: true,
            mdPlus: {
                all: true
            },
            pwa: true,
            search: false // use @vuepress/plugin-docsearch instead
        },
        footer:``
    }),
})
EOF
```
## 启动
```shell
yarn docs:dev
```
## 打包
```shell
yarn docs:build
```
