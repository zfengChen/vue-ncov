import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Map from '@/views/Map'
import News from '@/views/News'
import City from '@/views/City'
import SpringView from '@/views/SpringView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/map', name: 'Map', component: Map },
  { path: '/news', name: 'News', component: News },
  { path: '/city/:city', name: 'City', component: City },
  { path: '/spring/:citys', name: 'SpringView', component: SpringView, props: true }

]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
