<template>
  <div class="risk-container">
    <p class="titles"><i></i>风险疫情地区</p>
    <div class="risk">
      <div class="content">
        <div class="card">
          <div class="item">
            <p class="title">高风险地区数量:{{ high_count }}</p>
            <div class="item">
              <ul>
                <li v-for="(item, index) in high_list" :key="index">
                  <p class="area_names">{{ item.area_name }}</p>
                  <ol v-for="(val, index) in item.communitys" :key="index">
                    <li>- {{ val }}</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
          <div class="item">
            <p class="title">中风险地区数量:{{ middle_count }}</p>
            <div class="item">
              <ul>
                <li v-for="(item, index) in middle_list" :key="index">
                  <p class="area_names">{{ item.area_name }}</p>
                  <ol v-for="(val, index) in item.communitys" :key="index">
                    <li>- {{ val }}</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Risk',
  data () {
    return {
      high_list: [],
      high_count: '',
      middle_count: '',
      middle_list: []
    }
  },
  methods: {
    async initRiskData () {
      const res = await this.$api.getSpringTravelRisk({
        key: '091e120f84cceba5290cf1a193070395'
      })
      if (res.error_code === 0) {
        this.high_count = res.result.high_count
        this.high_list = res.result.high_list
        this.middle_count = res.result.middle_count
        this.middle_list = res.result.middle_list
      }
    }
  },
  mounted () {
    this.initRiskData()
  }
}
</script>

<style lang="less" scoped>
.titles {
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
.titles::before {
  content: '';
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
.title {
  color: #333;
  font-weight: 700;
  font-size: 0.16rem;
  line-height: 0.225rem;
}
.risk {
  width: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.content {
  padding: 0.12rem 0.16rem;
  font-size: 0.12rem;
  background-color: #fff;
}
.card {
  border-radius: 0.04rem;
  border: 0.005rem solid #ebebeb;
  background: #fff;
  box-shadow: 0 0.02rem 0.06rem 0 rgb(0 0 0 / 5%);
}
.item {
  justify-content: space-between;
  padding: 0.15rem 0.16rem;
  border-bottom: 1px solid #f1f1f1;
}
.area_names {
  color: #333;
  font-weight: 700 !important;
  font-size: 0.13rem;
}
</style>
