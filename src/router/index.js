// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/templates/home/Home.vue"),
  },

  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import("@/views/templates/deposit/DepositPage.vue"),
  },

  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import("@/views/templates/withdraw/WithdrawPage.vue"),
  },

  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import("@/views/templates/login/LoginPage.vue"),
  // },
  // {
  //   path: '/sign-up',
  //   name: 'SignUpPage',
  //   component: () => import("@/views/templates/login/SignUpPage.vue"),
  // }

];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
