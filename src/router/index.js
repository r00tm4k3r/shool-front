import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      name: 'at-work-view',
      component: () => import('../views/AtWorkView.vue')
  },
  {
    path: '/coaches',
    name: 'coaches-view',
    component: () => import('../views/CoachesView.vue')
  }, 
  {
      path: '/schedule',
      name: 'schedule-view',
      component: () => import('../views/SchedulesView.vue')
  },
  {
      path: '/sportsmans',
      name: 'sportsmans-view',
      component: () => import('../views/SportsmansView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
