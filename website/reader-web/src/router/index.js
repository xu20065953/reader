import Vue from 'vue'
import Router from 'vue-router'
import TopBottomLayout from '@/views/layout/top-bottom-layout';

Vue.use(Router)

export default new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: TopBottomLayout,
			redirect: '/index',
			children: [
				{
					path: 'index',
					name: 'index',
					component: () => import(/* webpackChunkName: "about" */ '@/views/home/index.vue'),
					meta: { title: "书城"}
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
		}
	]
})
