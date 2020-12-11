import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SubjectIndex from '../views/SubjectIndex.vue'
import SongIndex from '../views/SongIndex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/subjects',
    name: 'SubjectIndex',
    component: SubjectIndex
  },
  {
    path: '/songs',
    name: 'SongIndex',
    component: SongIndex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
