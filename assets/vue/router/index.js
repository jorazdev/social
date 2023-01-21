import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/auth/AuthIndex.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup/SignupIndex.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/404/PageNotFound.vue')
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../layout/LayoutIndex.vue'),
    redirect: '/app/dashboard',
    children: [
      {
        path: '/app/dashboard',
        component: () => import('../views/dashboard/DashBoard.vue'),
        name: 'dashboard',
        meta: { requiresAuth: true }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
