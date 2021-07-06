module.exports = {
    title: 'ECharts Cookbook',
    plugins: ['vuepress-plugin-demo-container'],
    themeConfig: {
        nav: [
            {text: "配置实践", link: '/'},
            {text: "自定义图表", link: '/custom/'},
            {text: "过往配置案例", link: '/case/'}
        ],
        sidebar: 'auto'
    }
}