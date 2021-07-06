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
        tooltip: {
          show: true
        },
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
        color: [
          '#B5EAEA',
          '#EDF6E5',
          '#FFBCBC',
          '#F38BA0'
        ],
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
        color: [
          '#B5EAEA',
          '#EDF6E5',
          '#FFBCBC',
          '#F38BA0'
        ],
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

## 内容格式器 formatter

`tooltip.formatter`
`xAxis.axisLabel.formatter`
`series-line.label.formatter `
...

### tooltip.formatter

:::demo

```vue

<template>
  <div>
    <v-chart autoresize :options="option" style="width: 100%;"></v-chart>
    <span>提示框浮层内容格式器：</span>
    <el-select v-model="formatterType" placeholder="浮层内容格式器" @change="handleFormatter">
      <el-option label="默认" value=""></el-option>
      <el-option label="字符串模板" value="0"></el-option>
      <el-option label="回调函数" value="1"></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: {},
      formatterType: ''
    }
  },
  mounted() {
    this.option = {
      color: [],
      tooltip: {
        trigger: 'axis',
        formatter: null
      },
      xAxis: {
        name: 'X轴\n名称', // 换行符
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        name: 'Y轴名称',
        type: 'value',
        splitLine: {show: false} // 网格线
      },
      series: [
        {
          name: '模拟数据-0',
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
        },
        {
          name: '模拟数据-1',
          data: [30, 80, 190, 300, 240, 50, 80],
          type: 'line',
          smooth: false
        }
      ]
    }
    this.option.color = this.$colors
  },
  methods: {
    handleFormatter(value) {
      switch (value) {
        case "" :
          this.option.tooltip.formatter = null
          break
        case '0':
          // 不适合多个系列的数据
          this.option.tooltip.formatter = '{a} <br/> {b} <br/> {c}'
          break
        case '1':
          this.option.tooltip.formatter = (params) => {
            let tooltip = Array.isArray(params) ? params.map((param) => {
              return param.marker + '  ' + param.data
            }) : []
            return tooltip.join('<br/>')
          }
      }

    }
  }
}
</script>
```

:::

## 饼图（pie）

:::demo

```vue

<template>
  <v-chart autoresize :options="option" style="width: 100%"></v-chart>
</template>
<script>
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
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

## 地图（map）

地图数据：https://github.com/apache/echarts/tree/4.9.0/map
ECharts：https://echarts.apache.org/zh/option.html#series-map

### 局部地图

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
      option:{
        series: [
          {
            name: '广州地图',
            type: 'map',
            map: '广东',
          }
        ]
      }
    }
  }
}
</script>
```

:::




