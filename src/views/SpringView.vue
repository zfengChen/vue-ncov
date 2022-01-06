<template>
  <div class="spring-view-container">
    <div class="from">
      <p class="title">
        <i></i>
        出发地区:{{ fromInfo.city_name }}
      </p>
      <div class="content">
        <div class="card">
          <p>
            <strong class="st">高风险地区，进入政策描述:</strong>
            {{ fromInfo.high_in_desc }}
          </p>
          <p>
            <strong class="st">低风险地区，进入政策描述:</strong>
            {{ fromInfo.low_in_desc }}
          </p>
          <p>
            <strong class="st">出行政策描述:</strong>
            {{ fromInfo.out_desc }}
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="to">
      <p class="title">
        <i></i>
        到达地区:{{ toInfo.city_name }}
      </p>
      <div class="content">
        <div class="card">
          <p>
            <strong class="st">高风险地区，进入政策描述:</strong>
            {{ toInfo.high_in_desc }}
          </p>
          <p>
            <strong class="st">低风险地区，进入政策描述:</strong>
            {{ toInfo.low_in_desc }}
          </p>
          <p>
            <strong class="st">出行政策描述:</strong>
            {{ toInfo.out_desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpringView',
  data () {
    return {
      fromInfo: {},
      toInfo: {}
    }
  },
  props: {
    citys: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  mounted () {
    this.getSpringTravelQuery()
  },
  methods: {
    async getSpringTravelQuery () {
      const res = await this.$api.springTravelQuery({
        key: '091e120f84cceba5290cf1a193070395',
        from: this.citys[0].value,
        to: this.citys[1].value
      })
      if (res.error_code === 0) {
        this.fromInfo = res.result.from_info
        this.toInfo = res.result.to_info
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
.st {
  font-size: 0.14rem;
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
  overflow: hidden;
  box-shadow: 0 0.02rem 0.06rem 0 rgb(0 0 0 / 5%);
}
</style>
