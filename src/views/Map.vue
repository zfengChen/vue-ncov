<template>
  <div class="map-container">
    <p class="title"><i></i>疫情地图</p>
    <van-tabs v-model="active" title-active-color="#1989fa" color="#1989fa">
      <van-tab title="国内疫情">
        <div id="chinaMap"></div>
      </van-tab>
      <van-tab title="国外疫情" ref="tab2">
        <div id="worldMap" ref="worldMap"></div>
      </van-tab>
    </van-tabs>

    <TreeChart></TreeChart>
  </div>
</template>

<script>
import TreeChart from '@/components/TreeChart'

export default {
  name: 'Map',
  data () {
    return {
      cityMapData: [],
      worldMapData: [],
      active: 0
    }
  },
  mounted () {
    this.initCityData()
  },
  updated () {
    this.initWordData()
  },
  methods: {
    /*
      国内数据
    */
    async initCityData () {
      const res = await this.$api.getCaseNum()
      // console.log(res)
      for (let i = 0; i < res.retdata.length; i++) {
        var temp = {
          name: res.retdata[i].xArea,
          value: res.retdata[i].curConfirm
        }
        // console.log(temp)
        this.cityMapData.push(temp)
      }
      this.$charts.chinaMap('chinaMap', this.cityMapData)
    },
    /*
      海外数据
    */
    async initWordData () {
      const res = await this.$api.getNcovabroad({
        key: '295108581115329ee4308514139e3969'
      })
      for (let i = 0; i < res.newslist.length; i++) {
        var temp = {
          name: res.newslist[i].provinceName,
          value: res.newslist[i].currentConfirmedCount
        }
        this.worldMapData.push(temp)
      }
      var worldMap = this.$refs.worldMap
      this.$charts.worldMap(worldMap, this.worldMapData)
    }
  },
  components: {
    TreeChart
  }
}
</script>

<style lang="less" scoped>
#chinaMap {
  width: 100%;
  height: 400px;
}
#worldMap {
  width: 100%;
  height: 400px;
}
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}
.title::before {
  content: '';
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>
