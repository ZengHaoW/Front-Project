//search的小仓库
import {reqGetSearchInfo} from "@/api";

export default {
    namespaced: true,
    actions: {
        async getSearchList({commit}, params) {
            let result = await reqGetSearchInfo(params)
            // console.log(result)
            if (result.code === 200) {
                commit('GETSEARCHLIST', result.data)
            }
        }

    },
    mutations: {
        GETSEARCHLIST(state, searchList) {
            state.searchList = searchList
        }
    },
    state: {
        searchList: {},
    },
    //简化仓库数据
    getters: {
        goodsList(state) {
            return state.searchList.goodsList || []
        },
        attrsList(state) {
            return state.searchList.attrsList || []
        },
        trademarkList(state) {
            return state.searchList.trademarkList || []
        },

    }
}