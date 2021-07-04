---
sidebarDepth: 2
---

# ECharts 使用汇总

直角坐标系（grid）三个核心配置：

- `xAxis`
- `yAxis`
- `grid`

## 折线图（Line）

:::demo

```vue

<template>
  <div>
    <v-chart autoresize :options="option" style="width: 100%;"></v-chart>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            // 图表标记组件
            markPoint: {
              symbol: 'pin',
              symbolSize: 50,
              data: [
                {
                  coord: ['Mon', 150]
                }
              ],
              // 标注的高亮样式，一般是 hover 效果
              emphasis: {
                // label 一般指的是文字标签
                label: {
                  show: true,
                  position: 'inside',
                  color: 'white',
                  // 标签内容格式器
                  formatter(params) {
                    return params.data.coord[1]
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}
</script>
```

:::