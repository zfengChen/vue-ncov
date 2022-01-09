import { get } from '@/utils/request.js'

const api = {
  /*
    疫情数据
  */
  getDataInfo (params) {
    return get('http://api.tianapi.com/ncov/index', params)
  },
  /*
    省市疫情
  */
  getCaseNum (params) {
    return get('http://iwenwiki.com/wapicovid19/all.php')
  },
  /*
    海外疫情
  */
  getNcovabroad (params) {
    return get('http://api.tianapi.com/txapi/ncovabroad/index', params)
  },
  /*
    各地政策城市数据 聚合数据 跨域问题 vue.config.js
  */
  springTravel (params) {
    return get('/api/springTravel/citys', params)
  },
  /*
    各地政策详情
  */
  springTravelQuery (params) {
    return get('/api/springTravel/query', params)
  },
  /*
    查询风险地区
  */
  getSpringTravelRisk (params) {
    return get('/api/springTravel/risk', params)
  }
}

export default api
