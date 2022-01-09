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
      .getCaseNum()
      .then((res) => {
        // res.length 改成 res.retdata.length
        for (let i = 0; i < res.retdata.length; i++) {
          if (currentCity === res.retdata[i].xArea) {
            for (let j = 0; j < res.retdata[i].subList.length; j++) {
              var temp = {}
              if (res.retdata[i].xArea !== '北京') {
                temp = {
                  name: res.retdata[i].subList[j].city,
                  value: res.retdata[i].subList[j].curConfirm,
                  itemStyle: {
                    normal: {
                      areaColor: this.setColor(res.retdata[i].subList[j].curConfirm)
                    }
                  }
                }
              } else {
                temp = {
                  name: res.retdata[i].subList[j].city + '市',
                  value: res.retdata[i].subList[j].curConfirm,
                  itemStyle: {
                    normal: {
                      areaColor: this.setColor(res.retdata[i].subList[j].curConfirm)
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
