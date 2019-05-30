import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/Register.vue'),
  },
  {
    path: '/userList',
    name: 'userList',
    component: () => import('@/views/user/UserList.vue'),
  },
  ],
});
