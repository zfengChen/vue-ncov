<template>
  <div class="home">
    <Header></Header>
    <Info :infoData="infoData"></Info>
    <CaseNum :caseNumData="caseNumData"></CaseNum>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Info from '@/components/Info'
import CaseNum from '@/components/CaseNum'

export default {
  name: 'Home',
  data () {
    return {
      infoData: {},
      caseNumData: {}
    }
  },
  created () {
    this.initDataInfo()
  },
  components: {
    Header,
    Info,
    CaseNum
  },
  methods: {
    async initDataInfo () {
      const res = await this.$api.getDataInfo({
        key: '295108581115329ee4308514139e3969'
      })
      this.infoData = {
        note1: res.newslist[0].desc.note1,
        note2: res.newslist[0].desc.note2,
        note3: res.newslist[0].desc.note3,
        remark1: res.newslist[0].desc.remark1,
        remark2: res.newslist[0].desc.remark2,
        remark3: res.newslist[0].desc.remark3
      }
      this.caseNumData = {
        // 最后更新时间
        modifyTime: res.newslist[0].desc.modifyTime,
        // 现存确诊人数
        currentConfirmedCount: res.newslist[0].desc.currentConfirmedCount,
        // 累计确诊人数
        confirmedCount: res.newslist[0].desc.confirmedCount,
        // 累计境外输入人数
        suspectedCount: res.newslist[0].desc.suspectedCount,
        // 累计治愈人数
        curedCount: res.newslist[0].desc.curedCount,
        // 累计死亡人数
        deadCount: res.newslist[0].desc.deadCount,
        // 现存无症状人数
        seriousCount: res.newslist[0].desc.seriousCount,

        // 相比昨天现存确诊人数
        currentConfirmedIncr: res.newslist[0].desc.currentConfirmedIncr,
        // 新增境外输入人数
        suspectedIncr: res.newslist[0].desc.suspectedIncr,
        // 相比昨天累计确诊人数
        confirmedIncr: res.newslist[0].desc.confirmedIncr,
        // 相比昨天新增治愈人数
        curedIncr: res.newslist[0].desc.curedIncr,
        // 相比昨天新增死亡人数
        deadIncr: res.newslist[0].desc.deadIncr,
        // 相比昨天现存无症状人数
        seriousIncr: res.newslist[0].desc.seriousIncr
      }
    }
  }
}
</script>
