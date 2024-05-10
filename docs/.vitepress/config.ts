import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'XAdmin',
  description: '基于Gin和Soybean Admin快速的中后台开发框架。',

  themeConfig: {
    nav: [{ text: '文档', link: '/exploit/index' }],

    sidebar: [
      {
        items: [
          { text: '快速开始', link: '/example', items: [{ text: 'gin' }] },
          { text: '组件封装', link: '/example', items: [{ text: '' }] },
        ],
      },
    ],
  },
});
