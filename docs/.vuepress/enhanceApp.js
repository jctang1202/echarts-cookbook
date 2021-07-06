import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts'
import ECharts from 'vue-echarts'

export default ({Vue, options, router}) => {
    Vue.use(Element);
    Vue.component('v-chart', ECharts)
    Vue.prototype.$colors = [
        'B5EAEA',
        'EDF6E5',
        'FFBCBC',
        'F38BA0'
    ]
};