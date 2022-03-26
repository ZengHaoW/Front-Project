//shopcart的小仓库
import {reqCartList, reqDeletCartById, reqUpdateCheckedByid} from "@/api";

export default {
    namespaced: true,
    actions: {
        async getCartList({commit}) {
            let result = await reqCartList()
            // console.log(result)
            if (result.code === 200) {
                commit('GETCARTLIST', result.data)
            }
        },
        async deleteCartById({commit}, skuId) {
            let result = await reqDeletCartById(skuId)
            // console.log(result)
            if (result.code === 200) {
                return "ok"
            }
            else {
                return Promise.reject(new Error('failed'))
            }
        },
        async updateCheckedById({ commit }, { skuId, isChecked }) {
            let result = await reqUpdateCheckedByid(skuId, isChecked);
            if (result.code == 200) {
                return "ok";
            } else {
                return Promise.reject(new Error("faile"));
            }
        },

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