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
    // 接口维护中 2022-1-5
    // async initCityData () {
    //   const res = await this.$api.getCaseNum({
    //     // 该接口在维护 key值需要改
    //     key: '171e165a7d991c5f6ecd5194c54778ef'
    //   })
    //   this.cityMapData = res
    //   console.log(res)
    // }
    /*
      国内数据
    */
    initCityData () {
      this.$api
        .getCaseNum({
          key: '171e165a7d991c5f6ecd5194c54778ef'
        })
        .then((res) => {
          // 这里记得是 res.newslist.length
          // 因为接口维护 没有 newslist
          for (let i = 0; i < res.length; i++) {
            var temp = {
              name: res.newslist[i].provinceShortName,
              value: res.newslist[i].currentConfirmedCount
            }
            this.cityMapData.push(temp)
          }
          this.$charts.chinaMap('chinaMap', this.cityMapData)
        })
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
