import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import main_plate from '@/components/main_plate'
import list from '@/components/list'
import introduce from '@/components/introduce'
Vue.use(Router)

export default new Router({
	linkExactActiveClass: 'active',
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		console.log(to),
			console.log(from)
		console.log(savedPosition)
	},
	routes: [{
		path: '/',
		name: 'index',
		component: index
	}, {
		path: '/main_plate',
		name: 'main_plate',
		component: main_plate
	}, {
		path: '/list',
		name: 'list',
		component: list
	}, {
		path: '/introduce',
		name: 'introduce',
		component: introduce
	}]
})