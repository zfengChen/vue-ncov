<template>
  <div class="spring-travel-container">
    <slot></slot>
    <div class="spring">
      <!-- 多次使用 van-field 会出现2个共用数据 所以要写一个放心的组件-->
      <!-- 出发地区 -->
      <Cascader :options="options" label="出发地区" @onValue="getgoCity"></Cascader>
      <!-- 到达地区 -->
      <Cascader :options="options" label="到达地区" @onValue="getonCity"></Cascader>

      <van-button type="primary" block @click="gotoSpringView">点击查询</van-button>
    </div>
  </div>
</template>

<script>
import Cascader from '@/components/Cascader'

export default {
  name: 'SpringTravel',
  data () {
    return {
      goCity: '', // 出发地区
      onCity: '', // 到达地区
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [],
      citys: []
    }
  },
  methods: {
    async initCityData () {
      const res = await this.$api.springTravel({
        key: '091e120f84cceba5290cf1a193070395'
      })
      /*
      对数据进行过滤 把值取出来 重新赋值给vant组件的二级 van-cascader 因为是二级数组
      */
      var currentAll = []
      if (res.error_code === 0) {
        for (var i = 0; i < res.result.length; i++) {
          var arr = []
          for (var j = 0; j < res.result[i].citys.length; j++) {
            var temp2 = {
              text: res.result[i].citys[j].city,
              value: res.result[i].citys[j].city_id
            }
            arr.push(temp2)
          }
          var temp1 = {
            text: res.result[i].province,
            value: res.result[i].province_id,
            children: arr
          }
          currentAll.push(temp1)
        }
        this.options = currentAll
      }
    },
    getgoCity (data) {
      this.citys.push(data)
    },
    getonCity (data) {
      this.citys.push(data)
    },
    gotoSpringView () {
      if (this.citys.length === 2) {
        this.$router.push({ name: 'SpringView', params: { citys: this.citys } })
      } else {
        this.$notify({ type: 'danger', message: '请选择城市' })
      }
    }
  },
  mounted () {
    this.initCityData()
  },
  components: {
    Cascader
  }
}
</script>

<style lang="less" scoped>
.spring {
  width: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}

.spring .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
</style>
