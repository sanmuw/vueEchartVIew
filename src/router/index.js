import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/Login/index'
import Home from '@/view/Home/index'
import Sdview from '@/view/Sdview/index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/sdview',
            name: 'Sdview',
            component: Sdview
        },
        {
            path: '/',
            redirect: HelloWorld
        },
    ]
})