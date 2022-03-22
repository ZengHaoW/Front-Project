import Vue from 'vue'
import Vuex from 'vuex'

//引入小仓库
import home from "./modules/home";
import search from "./modules/search";

Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        home,
        search
    }
})