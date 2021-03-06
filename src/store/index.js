import Vue from 'vue'
import Vuex from 'vuex'

//引入小仓库
import home from "./modules/home";
import search from "./modules/search";
import detail from "./modules/detail";
import shopcart from "@/store/modules/shopcart";
import user from "@/store/modules/user";
import trade from "@/store/modules/trade"
Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})