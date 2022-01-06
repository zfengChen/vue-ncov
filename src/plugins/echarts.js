import echarts from 'echarts'
import nameMap from '@/plugins/name.js'

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $charts: {
      get () {
        return {
          /*
            中国地图
          */
          chinaMap (id, data) {
            this.chart = echarts.init(document.getElementById(id))

            var option = {
              // 提示信息
              tooltip: {
                triggerOn: 'click', // 事件类型
                enterable: true, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
                formatter (data) {
                  // " + data.name + "
                  return "<a href='/#/city/" + data.name + "' style='color:#fff'><div><p>" + data.name + '</p><p>现存确诊:' + data.value + '</p></div></a>'
                }
              },
              visualMap: [{ // 映射-颜色值
                orient: 'vertical', // 分段方向:horizontal水平
                type: 'piecewise', // 分段
                pieces: [ // 配置颜色区间
                  { min: 0, max: 0, color: '#FFFFFF' },
                  { min: 1, max: 10, color: '#FDFDCF' },
                  { min: 10, max: 100, color: '#FE9E83' },
                  { min: 100, max: 500, color: '#E55A4E' },
                  { min: 500, max: 10000, color: '#4F070D' }
                ]
              }],
              series: [{
                name: '省',
                type: 'map', // 配置图表类型
                map: 'china', // 中国地图
                roam: false, // 是否允许自动缩放
                zoom: 1.2, // 地图缩放比例
                label: { // 配置字体
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: { // 配置地图样式
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0,0,0,0.2)'
                  },
                  emphasis: { // 选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                  }
                },
                data
              }]
            }

            this.chart.setOption(option)
          },
          /*
            世界地图
          */
          worldMap (el, data) {
            this.chart = echarts.init(el)
            var option = {
              tooltip: {
                formatter (data) {
                  return '<div><p>' + data.name + '</p><p>现存确诊:' + data.value + '</p></div>'
                }
              },
              visualMap: [{ // 映射-颜色值
                orient: 'vertical', // 分段方向:horizontal水平
                type: 'piecewise', // 分段
                pieces: [ // 配置颜色区间
                  { min: 0, max: 0, color: '#FFFFFF' },
                  { min: 1, max: 1000, color: '#FDFDCF' },
                  { min: 1000, max: 10000, color: '#FE9E83' },
                  { min: 10000, max: 500000, color: '#E55A4E' },
                  { min: 500000, max: 10000000000, color: '#4F070D' }
                ]
              }],
              series: [{
                name: '世界地图',
                type: 'map', // 配置图表类型
                map: 'world', // 中国地图
                roam: false, // 是否允许自动缩放
                zoom: 1.2, // 地图缩放比例
                label: { // 配置字体
                  normal: {
                    show: false, // 控制地图显示名字
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                nameMap: nameMap,
                itemStyle: { // 配置地图样式
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0,0,0,0.2)'
                  },
                  emphasis: { // 选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0
                  }
                },
                data
              }]
            }
            this.chart.setOption(option)
          },

          /*
            省份地图
          */
          provinceCity (id, city, data) {
            this.chart = echarts.init(document.getElementById(id))
            var option = {
              tooltip: {
                formatter (data) {
                  return '<div><p>' + data.name + '</p><p>现存确诊:' + data.value + '</p></div>'
                }
              },
              visualMap: [{ // 映射-颜色值
                orient: 'vertical', // 分段方向:horizontal水平
                type: 'piecewise', // 分段
                pieces: [ // 配置颜色区间
                  { min: 0, max: 0, color: '#FFFFFF' },
                  { min: 1, max: 10, color: '#FDFDCF' },
                  { min: 10, max: 100, color: '#FE9E83' },
                  { min: 100, max: 500, color: '#E55A4E' },
                  { min: 500, max: 10000, color: '#4F070D' }
                ]
              }],
              series: [{
                name: '市',
                type: 'map', // 配置图表类型
                map: city, // 必须写中文
                roam: false, // 是否允许自动缩放
                zoom: 1.2, // 地图缩放比例
                label: { // 配置字体
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: { // 配置地图样式
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0,0,0,0.2)'
                  },
                  emphasis: { // 选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0
                  }
                },
                data
              }]
            }
            this.chart.setOption(option)
          }
        }
      }
    }
  })
}

export default install