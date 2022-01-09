<template>
  <div id="app">
    <van-nav-bar :placeholder="placeholder" fixed title="校园实时疫情监控" />

    <router-view />

    <van-tabbar route placeholder>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="guide-o" to="/map">疫情地图</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/news">最新消息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      placeholder: true
    }
  }
}
</script>

<style lang="less" scoped></style>
