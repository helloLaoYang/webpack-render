import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
      path: '/',
      component: () => import('../views/hello.vue'),
      name: 'HELLO'
    }]
  })
}
