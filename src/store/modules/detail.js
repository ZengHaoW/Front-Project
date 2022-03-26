//detail的小仓库
import {reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api";
//封装游客身份模块,生成一个随机字符串(不能再变)
import {getUUID} from '@/utils/uuid_token'
export default {
    namespaced: true,
    actions: {
        async getGoodsInfo({commit}, params) {
            let result = await reqGoodsInfo(params)
            // console.log(result)
            if (result.code === 200) {
                commit('GETGOODSINFO', result.data)
            }
        },
        async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
            //加入购物车的解构
            let result = await reqAddOrUpdateShopCart(skuId, skuNum)
            //返回的是个promis
            if (result.code === 200) {
                return 'ok'
            }
            else {
                return Promise.reject(new Error('failed'))
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
        uuid_token: getUUID()
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