module.exports = {
    title: 'ECharts Cookbook',
    plugins: ['vuepress-plugin-demo-container'],
    themeConfig: {
        nav: [
            {text: "配置实践", link: '/practice/'},
            {text: "自定义图标", link: '/custom/'},
            {text: "过往配置案例", link: '/case/'}
        ],
        sidebar: 'auto'
    }
}