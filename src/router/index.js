import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

import Father from '@/pages/Father'

export const constantRouterMap = [
  { path: '/one', component: () => import('@/pages/pageone') },
  { path: '/two', component: () => import('@/pages/pagetwo') },
  { path: '/', redirect: '/three' },
  {
    path: '/three',
    component: Father,
    children: [
      {
        path: 'son1',
        component: () => import('@/pages/pageone')
      }, {
        path: 'son2',
        component: () => import('@/pages/pagetwo')
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

