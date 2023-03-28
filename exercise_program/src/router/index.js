import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FileNotFound from '../views/FileNotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/search',
        name: 'search',
        // route level code-splitting
        // this generates a separate chunk (search.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "search" */ '../views/SearchView.vue')
    },
    { path: '*', component: FileNotFound }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
