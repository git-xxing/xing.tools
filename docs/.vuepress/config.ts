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
            giscus: {
                repo: "This-is-an-Apple/gitalk-comments",
                repoId: "MDEwOlJlcG9zaXRvcnkyMTA1MjQyMTQ=",
                category: "Announcements",
                categoryId: "DIC_kwDODIxYNs4CAO1u",
                lazyLoad: true
            },
            mdPlus: {
                all: true
            },
            ga: "G-EE8M2S3MPB",
            ba: "10b7bc420625758a319d6b23aed4700f",
            rss: {
                siteURL: "https://v2.vuepress-theme-gungnir.vercel.app",
                copyright: "Renovamen 2018-2022"
            },
            pwa: true,
            search: false // use @vuepress/plugin-docsearch instead
        },
        footer:``
    }),
})
