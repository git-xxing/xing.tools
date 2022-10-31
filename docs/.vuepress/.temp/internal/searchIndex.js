export const searchIndex = [
  {
    "title": "Hello VuePress",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "404"
  },
  {
    "title": "Tags",
    "headers": [],
    "path": "/tags/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Tags"
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/page/1/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "HomePage"
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
