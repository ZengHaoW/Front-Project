//shopcart的小仓库
import {reqCartList} from "@/api";

export default {
    namespaced: true,
    actions: {
        async getCartList({commit}) {
            let result = await reqCartList()
            console.log(result)
            // if (result.code === 200) {
            //     commit('GETSEARCHLIST', result.data)
            // }
        }

    },
    mutations: {
    },
    state: {
    },
    //简化仓库数据
    getters: {}
}