<template>
  <div>
    <div id="city"></div>
  </div>
</template>

<script>
export default {
  name: 'City',
  data () {
    return {
      cityData: []
    }
  },
  mounted () {
    const currentCity = this.$route.params.city
    this.$api
      .getCaseNum({
        key: '171e165a7d991c5f6ecd5194c54778ef'
      })
      .then((res) => {
        // res.length 改成 res.newslist.length
        for (let i = 0; i < res.length; i++) {
          if (currentCity === res.newslist[i].provinceShortName) {
            for (let j = 0; j < res.newslist[i].cities.length; j++) {
              var temp = {}
              if (res.newslist[i].provinceShortName !== '北京') {
                temp = {
                  name: res.newslist[i].cities[j].cityName,
                  value: res.newslist[i].cities[j].currentConfirmedCount,
                  itemStyle: {
                    normal: {
                      areaColor: this.setColor(res.newslist[i].cities[j].currentConfirmedCount)
                    }
                  }
                }
              } else {
                temp = {
                  name: res.newslist[i].cities[j].cityName + '市',
                  value: res.newslist[i].cities[j].currentConfirmedCount,
                  itemStyle: {
                    normal: {
                      areaColor: this.setColor(res.newslist[i].cities[j].currentConfirmedCount)
                    }
                  }
                }
              }

              this.cityData.push(temp)
            }
          }
        }
        this.$charts.provinceCity('city', currentCity, this.cityData)
      })
  },
  methods: {
    setColor (value) {
      let currentColor = ''
      switch (true) {
        case value === 0:
          currentColor = '#fff'
          break
        case value > 0 && value < 10:
          currentColor = '#FDFDCF'
          break
        case value >= 10 && value < 100:
          currentColor = '#FE9E83'
          break
        case value >= 100 && value < 500:
          currentColor = '#E55A4E'
          break
        case value >= 500 && value < 10000:
          currentColor = '#4F070D'
          break
      }
      return currentColor
    }
  }
}
</script>

<style lang="less" scoped>
#city {
  width: 100%;
  height: 500px;
}
</style>
