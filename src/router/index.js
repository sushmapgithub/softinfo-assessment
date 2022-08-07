import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'LandingPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LandingPage.vue'),
    children: [
  {
    path: '/dataTable',
    name: 'dataTable',
    component: () => import(/* webpackChunkName: "about" */ '../views/dataTable.vue')
  },
  {
    path: '/CardNav',
    name: 'CardNav',
    component: () => import(/* webpackChunkName: "about" */ '../views/CardNav.vue')
  },
  {
    path: '/SettingsComp',
    name: 'SettingsComp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingsComp.vue')
  }
],

},
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
