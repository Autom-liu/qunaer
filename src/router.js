import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import City from '@/pages/city/city';
import Detail from '@/pages/detail/detail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/city',
			name: 'city',
			component: City,
		},
		{
			path: '/detail/:id',
			name: 'Detaile',
			component: Detail,
		},
  ],
});
