import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from '@/axios';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';

import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'


  NProgress.configure({
    showSpinner: true, 
    speed: 300, 
    minimum: 0.2, 
    trickleSpeed: 200, 
    easing: 'ease',
  });

router.beforeEach((to, from, next) => {
    NProgress.start(); 
    next(); 
  });
  
  router.afterEach(() => {
    NProgress.done(); 
  });





const app = createApp(App);
app.use(createPinia())
app.use(router)
app.mount('#app')
