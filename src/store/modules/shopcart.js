//shopcart的小仓库
import {reqCartList} from "@/api";

export default {
    namespaced: true,
    actions: {
        async getCartList({commit}) {
            let result = await reqCartList()
            // console.log(result)
            if (result.code === 200) {
                commit('GETCARTLIST', result.data)
            }
        }

    },
    mutations: {
        GETCARTLIST(state, cartList) {
            state.cartList = cartList
        }
    },
    state: {
        cartList: []
    },
    //简化仓库数据
    getters: {
        cartList(state) {
            return state.cartList[0] || {}
        },
        // cartInfoLlist(state) {
        //     return state
        // }
    }
}