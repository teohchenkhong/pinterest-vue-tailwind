//-------------------- IMPORTS ---------------------//
import Vue from 'vue'
import VueRouter from 'vue-router'


//--------------------- ROUTES ---------------------//
import Home from '../views/Home.vue'


//---------------------- INIT ----------------------//
// USE
Vue.use(VueRouter)

// ROUTES
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	}
];


// ROUTER INSTANCE
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

//--------------------- EXPORT ---------------------//
export default router;