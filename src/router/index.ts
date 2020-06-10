import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TodoPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Todo.vue')
  },
  {
    path: '/Show',
    name: 'Show',
    component: () => import(/* webpackChunkName: "about" */ '../views/Show.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
