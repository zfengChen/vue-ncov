<template>
  <div class="news-container">
    <p class="titles"><i></i>最新报道</p>
    <div class="news">
      <div class="card">
        <ul class="list">
          <li class="item" v-for="item in newsData" :key="item.id">
            <div class="tag">{{ item.pubDateStr }}</div>
            <div class="content">
              <div class="title">{{ item.title }}</div>
              <p class="msg">{{ item.summary }}</p>
            </div>
            <a :href="item.sourceUrl">></a>
          </li>
        </ul>
      </div>
    </div>
    <SpringTravel>
      <p class="titles"><i></i>放假出行间防疫政策</p>
    </SpringTravel>
    <Risk></Risk>
  </div>
</template>

<script>
import SpringTravel from '@/components/SpringTravel'
import Risk from '@/components/Risk'

export default {
  name: 'New',
  data () {
    return {
      newsData: []
    }
  },
  created () {
    this.initDataInfo()
  },
  methods: {
    async initDataInfo () {
      const { newslist: res } = await this.$api.getDataInfo({
        key: '295108581115329ee4308514139e3969'
      })
      this.newsData = res[0].news
    }
  },
  components: {
    SpringTravel,
    Risk
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
.news {
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

.item {
  display: flex;
  justify-content: space-between;
  padding: 0.15rem 0.16rem;
  border-bottom: 1 px solid #f1f1f1;
}
.tag {
  width: 0.5rem;
  display: flex;
  flex: none;
  align-items: center;
  height: 0.17rem;
  margin-top: 0.02rem;
  padding: 0 0.04rem;
  border-radius: 0.02rem;
  background-color: #f74c31;
  color: #fff;
  font-weight: 700;
  font-size: 0.12rem;
  justify-content: center;
}
.title {
  color: #333;
  font-weight: 700;
  font-size: 0.16rem;
  line-height: 0.225rem;
}
.content {
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.07rem;
}
.content .msg {
  margin-top: 0.03rem;
  color: #999;
  font-weight: 400;
  font-size: 0.12rem;
  line-height: 0.17rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
