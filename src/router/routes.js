
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
export default [
    {
        name: 'shopcart',
        path: '/shopcart',
        component: ShopCart,
        meta: {isShow: true}
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: {isShow: true}
    },
    {
        name: 'detail',
        path: '/detail/:skuid',
        component: Detail,
        meta: {isShow: false}
    },
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