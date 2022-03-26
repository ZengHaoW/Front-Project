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
        //删除全部勾选商品
        deleteAllCheckedCart({dispatch, getters}) {
            //context: 小仓库, commit, state都有
            // console.log(context)
            //获取购物车中全部的产品
            let PormiseAll = []
            getters.cartList.cartInfoList.forEach(item => {
                let promise = item.isChecked === 1? dispatch('deleteCartById', item.skuId): ""
                PormiseAll.push(promise)
            })

            return Promise.all(PormiseAll)
        },
        updateAllCartIsChecked({dispatch, state}, isChecked) {
            // console.log(state)
            // console.log(isChecked)
            let promiseAll = []
            state.cartList[0].cartInfoList.forEach(item => {
                let promise = dispatch("updateCheckedById", {
                    skuId: item.skuId,
                    isChecked,
                })
                promiseAll.push(promise)
            })
            return Promise.all(promiseAll)
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