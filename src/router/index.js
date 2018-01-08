import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

Vue.use(VueRouter)

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
      path: '/',
      component: App,
      name: 'App',
      redirect: {
        name: 'HELLO'
      },
      children: [{
        path: '',
        component: () => import('../views/hello.vue'),
        name: 'HELLO'
      }]
    }]
  })
}
