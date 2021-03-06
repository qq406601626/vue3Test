import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// import Button from '@element-plus/button/doc/index.vue'
// import Badge from '@element-plus/badge/doc/index.vue'
// import Tag from '@element-plus/tag/doc/index.vue'


const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/button',
  //   component: Button,
  // },
  // {
  //   path: '/badge',
  //   component: Badge,
  // },
  // {
  //   path: '/tag',
  //   component: Tag,
  // },
  {
    path:'/',
    component:{}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
