
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import routes from "@/router/routes";
export default new VueRouter({
    //配置路由
    routes,     //routes: routes
    //滚动行为
    scrollBehavior (to, from, savePosition) {
        return {y: 0}
    }
})