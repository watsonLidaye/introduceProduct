import Vue from 'vue'
import Router from 'vue-router'
import VueResouce from 'vue-resource'
import layer from 'vue-layer-mobile'
import 'vue-layer-mobile/need/layer.css'
import VueLocalStorage from 'vue-localstorage'

import index from '@/components/index'
import main_plate from '@/components/main_plate'
import list from '@/components/list'
import introduce from '@/components/introduce'
import maps from '@/components/maps'
Vue.use(Router)
Vue.use(VueResouce)
Vue.use(layer)
Vue.use(VueLocalStorage)


export default new Router({
	linkExactActiveClass: 'active',
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		// console.log(to),
		// 	console.log(from)
		// console.log(savedPosition)
	},
	routes: [{
		path: '/',
		name: 'index',
		component: index
	}, {
		path: '/index',
		name: 'index',
		component: index
	}, {
		path: '/main_plate/',
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
	}, {
		path: '/maps',
		name: 'maps',
		component: maps
	}, {
		path: '*',
		component: index
	}, {
		path: '/',
		redirect: {
			name: "index"
		}
	}, ]
})