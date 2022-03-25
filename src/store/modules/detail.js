//search的小仓库
import {reqGoodsInfo} from "@/api";

export default {
    namespaced: true,
    actions: {
        async getGoodsInfo({commit}, params) {
            let result = await reqGoodsInfo(params)
            console.log(result)
            if (result.code === 200) {
                commit('GETGOODSINFO', result.data)
            }
        }

    },
    mutations: {
        GETGOODSINFO(state, goodsinfo) {
            state.goodsinfo = goodsinfo
        }
    },
    state: {
        goodsinfo: {},
    },
    //简化仓库数据
    getters: {
        categoryView(state) {
            return state.goodsinfo.categoryView || {}
        },
        skuInfo(state) {
            return state.goodsinfo.skuInfo || {}
        },
        spuSaleAttrList(state) {
            return state.goodsinfo.spuSaleAttrList || []
        }
    }
}