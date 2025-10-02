import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  // 网站标题
  title: "网络安全面试知识库",
  // 网站描述
  description: "为网络安全领域的面试提供全面的知识储备和准备指南",
  // 部署站点的基础路径
  base: '/NongMei_Sec',
  // 最后更新时间
  lastUpdated: true,
  // 多语言支持
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    }
  },
  // 主题相关配置
  themeConfig: {
    // 站点logo
    logo: '/logo.png',
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '项目学习', link: '/project-learning/' },
      { text: '简历修改', link: '/resume-optimization/' },
      { text: '网安面经', link: '/security-interview/' },
      { text: '面经最前线', link: '/latest-interview-trends/' },
      { text: '简历投递', link: '/resume-submission/' },
      { text: '面试心得', link: '/interview-experience/' }
    ],
    // 侧边栏
    sidebar: {
      '/project-learning/': [
        {
          text: '项目学习',
          collapsed: false,
          items: [
            { text: '项目学习概述', link: '/project-learning/' }
          ]
        }
      ],
      '/resume-optimization/': [
        {
          text: '简历修改',
          collapsed: false,
          items: [
            { text: '简历修改概述', link: '/resume-optimization/' }
          ]
        }
      ],
      '/security-interview/': [
        {
          text: '网安面经',
          collapsed: false,
          items: [
            { text: '面试准备概述', link: '/security-interview/' },
            { text: '网络安全知识点汇总', link: '/security-interview/2025-10-01-mianshitimu' }
          ]
        }
      ],
      '/latest-interview-trends/': [
        {
          text: '面经最前线',
          collapsed: false,
          items: [
            { text: '最新面试趋势', link: '/latest-interview-trends/' }
          ]
        }
      ],
      '/resume-submission/': [
        {
          text: '简历投递',
          collapsed: false,
          items: [
            { text: '投递策略概述', link: '/resume-submission/' }
          ]
        }
      ],
      '/interview-experience/': [
        {
          text: '面试心得',
          collapsed: false,
          items: [
            { text: '面试经验分享', link: '/interview-experience/' }
          ]
        }
      ]
    },
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nongmeisec' }
    ],
    // 页脚
    footer: {
      message: '助力网络安全求职者成功面试',
      copyright: 'Copyright © 2023-present 网络安全面试知识库'
    },
    // 搜索
    search: {
      provider: 'local'
    },
    // 大纲设置
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    // 文档页脚文本配置
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 最后更新时间文本
    lastUpdatedText: '最后更新'
  }
})
