import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 解决vue-router在3.0版本以上重复点菜单报错问题，添加以下代码即可解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: 'Home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/qushi',
    name: 'Qushi',
    component: () => import('../views/Qushi.vue'),
    children: [
      {
        path: '/qushiui',
        name: 'qushiui',
        component: () => import('../components/Qushi/Qushiui.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 全局前置钩子
router.beforeEach((to, from, next) => {
  // to 去哪里
  // from 从哪来
  next(true) // 让不让去
})

// 全局后置钩子
router.afterEach((to, from) => {
  // to 去哪里
  // from 从哪来
})

export default router
