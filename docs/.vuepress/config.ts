import { navbar} from "./navbar";
import { sidebar} from "./sidebar";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

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
                repo: "gitxingtools/utterances",
                repoId: "R_kgDOGwT_cw",
                category: "Announcements",
                categoryId: "DIC_kwDOGwT_c84CSSxf",
                lazyLoad: true
            },
            mdPlus: {
                all: true
            },
            ga: "G-EE8M2S3MPB",
            ba: "10b7bc420625758a319d6b23aed4700f",
            // rss: {
            //     siteURL: "https://xing.tools",
            //     copyright: "Xing 2022"
            // },
            pwa: true,
            search: false // use @vuepress/plugin-docsearch instead
        },
        footer:``
    }),
})
