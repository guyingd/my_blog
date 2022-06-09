export const themeData = {
  "blog": {
    "description": "一个前端开发者",
    "intro": "/intro.html",
    "medias": {
      "Baidu": "https://example.com",
      "Bitbucket": "https://example.com",
      "Dingding": "https://example.com",
      "Discord": "https://example.com",
      "Dribbble": "https://example.com",
      "Email": "https://example.com",
      "Evernote": "https://example.com",
      "Facebook": "https://example.com",
      "Flipboard": "https://example.com",
      "Gitee": "https://example.com",
      "GitHub": "https://example.com",
      "Gitlab": "https://example.com",
      "Gmail": "https://example.com",
      "Instagram": "https://example.com",
      "Lines": "https://example.com",
      "Linkedin": "https://example.com",
      "Pinterest": "https://example.com",
      "Pocket": "https://example.com",
      "QQ": "https://example.com",
      "Qzone": "https://example.com",
      "Reddit": "https://example.com",
      "Rss": "https://example.com",
      "Steam": "https://example.com",
      "Twitter": "https://example.com",
      "Wechat": "https://example.com",
      "Weibo": "https://example.com",
      "Whatsapp": "https://example.com",
      "Youtube": "https://example.com",
      "Zhihu": "https://example.com"
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$6Hn6ZhjmsNyLEkGGg7sBwOPOpZU/zd7qrVl4bA4oOTgL9msytcpUq"
      ]
    }
  },
  "pure": false,
  "darkmode": "switch",
  "themeColor": false,
  "fullscreen": false,
  "locales": {
    "/": {
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "author": "作者",
        "date": "写作日期",
        "origin": "原创",
        "views": "访问量",
        "category": "分类",
        "tag": "标签",
        "readingTime": "阅读时间",
        "words": "字数",
        "toc": "此页内容",
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "paginationLocales": {
        "prev": "上一页",
        "next": "下一页",
        "navigate": "跳转到",
        "action": "前往",
        "errorText": "请输入 1 到 $page 之前的页码！"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "文章已加密",
        "placeholder": "输入密码",
        "remember": "记住密码",
        "errorHint": "请输入正确的密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家",
        "openInNewWindow": "Open in new window"
      },
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": [
        "/",
        "/home",
        "/slide",
        {
          "text": "如何使用",
          "icon": "creative",
          "prefix": "/guide/",
          "link": "/guide/",
          "children": "structure"
        },
        {
          "text": "文章",
          "icon": "note",
          "prefix": "/posts/",
          "children": [
            {
              "text": "文章 1-4",
              "icon": "note",
              "collapsable": true,
              "prefix": "article/",
              "children": [
                "article1",
                "article2",
                "article3",
                "article4"
              ]
            },
            {
              "text": "文章 5-12",
              "icon": "note",
              "children": [
                {
                  "text": "文章 5-8",
                  "icon": "note",
                  "collapsable": true,
                  "prefix": "article/",
                  "children": [
                    "article5",
                    "article6",
                    "article7",
                    "article8"
                  ]
                },
                {
                  "text": "文章 9-12",
                  "icon": "note",
                  "children": [
                    "article9",
                    "article10",
                    "article11",
                    "article12"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "Mr.Hope",
        "url": "https://mrhope.site"
      },
      "logo": "/logo.svg",
      "repo": "vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "navbar": [
        "/",
        "/home",
        {
          "text": "使用指南",
          "icon": "creative",
          "link": "/guide/"
        },
        {
          "text": "博文",
          "icon": "edit",
          "prefix": "/posts/",
          "children": [
            {
              "text": "文章 1-4",
              "icon": "edit",
              "prefix": "article/",
              "children": [
                {
                  "text": "文章 1",
                  "icon": "edit",
                  "link": "article1"
                },
                {
                  "text": "文章 2",
                  "icon": "edit",
                  "link": "article2"
                },
                "article3",
                "article4"
              ]
            },
            {
              "text": "文章 5-12",
              "icon": "edit",
              "children": [
                {
                  "text": "文章 5",
                  "icon": "edit",
                  "link": "article/article5"
                },
                {
                  "text": "文章 6",
                  "icon": "edit",
                  "link": "article/article6"
                },
                "article/article7",
                "article/article8"
              ]
            },
            {
              "text": "文章 9",
              "icon": "edit",
              "link": "article9"
            },
            {
              "text": "文章 10",
              "icon": "edit",
              "link": "article10"
            },
            "article11",
            "article12"
          ]
        },
        {
          "text": "主题文档",
          "icon": "note",
          "link": "https://vuepress-theme-hope.github.io/v2/zh/"
        }
      ],
      "footer": "默认页脚",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ]
    }
  }
}
