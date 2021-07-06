import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts';
import VueECharts from 'vue-echarts'
import {color} from "../../src/util/vars"
import "../../src/map/guangdong"


export default ({Vue, options, router}) => {
    Vue.use(Element);
    Vue.component('v-chart', VueECharts)
    Vue.prototype.$colors = color
};