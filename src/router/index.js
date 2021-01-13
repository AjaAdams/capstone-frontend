import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SubjectIndex from '../views/SubjectIndex.vue'
import SongIndex from '../views/SongIndex.vue'
import SongShow from '../views/SongShow.vue'
import Admin from '../views/Admin.vue'
import SubjectShow from '../views/SubjectShow'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Logout from '../views/Logout.vue'
import GeniusLyrics from '../components/GeniusLyrics'
import SearchResults from '../views/SearchResults.vue'

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
  },
  {
    path: '/songs/:id',
    name: 'song-show',
    component: SongShow
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/subjects/:name',
    name: 'subject-show',
    component: SubjectShow
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/lyrics',
    name: 'GeniusLyrics',
    component: GeniusLyrics
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResults,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
