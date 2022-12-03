import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../utils/firebase'
import LandingView from '../views/LandingView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta:{reqiureAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta:{reqiureAuth: true}
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUsView.vue'),
      meta:{reqiureAuth: true}

    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta:{reqiureAuth: true}

    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/PostView.vue'),
      meta:{reqiureAuth: true}
    },
  ]
})

router.beforeEach((to, from, next) => {
  const rutaAuth = to.matched.some(record => record.meta.reqiureAuth);
  const user = auth.currentUser;

  if (rutaAuth && user == null) {
    next({name: 'login'})
  }else{
    next();
  }
})

export default router
