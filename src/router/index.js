
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default new VueRouter({
    //配置路由
    routes: [
        {

            path: '/home',
            component: Home,
            meta: {isShow: true}
        },
        {
            path: '/login',
            component: Login,
            meta: {isShow: false}

        },
        {
            path: '/Register',
            component: Register,
            meta: {isShow: false}

        },
        {
            name: 'search',
            path: '/search/:keyWord?',              //?可以不穿params
            component: Search,
            meta: {isShow: true}

        },
        //重定向
        {
            path: '*',
            redirect: '/home',

        }
    ]
})