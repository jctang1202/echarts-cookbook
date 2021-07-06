---
sidebarDepth: 2
---

# ECharts 使用汇总

直角坐标系（grid）三个通用配置：

- `xAxis`
- `yAxis`
- `grid`

渲染顺序：

`grid` -> `xAxis` `yAxis` -> `chart`(line/bar) -> `component` (tooltip/legend/markPoint)

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
        color: ['green'],
        grid: {
          left: 30,
          top: 30,
          right: 40,
          bottom: 30,
          containLabel: true // 防止标签溢出
        },
        xAxis: {
          name: 'X轴\n名称', // 换行符
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          name: 'Y轴名称',
          // nameRotate: 90, // 水平线夹角度
          // nameLocation: 'center', 
          // nameGap: 40,
          type: 'value',
          splitLine: {show: false} // 网格线
        },
        legend: {
          data: ['A']
        },
        series: [
          {
            name: 'A',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            smooth: false,
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

## 柱状图（bar）

:::demo

```vue

<template>
  <div>
    <v-chart autoresize :options="option" style="width: 100%"></v-chart>
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
        series: [{
          data: [120, {
            value: 200,
            itemStyle: {
              color: 'green'
            }
          }, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      }
    }
  }
}
</script>
```

:::

### 多组数据

:::demo

```vue

<template>
  <div>
    <v-chart autoresize :options="option" style="width: 100%"></v-chart>
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
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          },
          {
            data: [120, 200, 150, 80, 70, 110, 130].reverse(),
            type: 'bar'
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 堆叠

:::demo

```vue

<template>
  <div>
    <v-chart autoresize :options="option" style="width: 100%"></v-chart>
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
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 1
          },
          {
            data: [120, 200, 150, 80, 70, 110, 130].reverse(),
            type: 'bar',
            stack: 1
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 水平柱状

:::demo

```vue

<template>
  <div>
    <v-chart autoresize :options="option" style="width: 100%"></v-chart>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: {
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 1
          },
          {
            data: [120, 200, 150, 80, 70, 110, 130].reverse(),
            type: 'bar',
            stack: 1
          }
        ]
      }
    }
  }
}
</script>
```

:::


