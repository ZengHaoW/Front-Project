//trade的小仓库
import {reqAddressInfo, reqOrderInfo} from "@/api";

export default {
    namespaced: true,
    actions: {
        async getUserAddress({commit}) {
            let result = await reqAddressInfo()
            // console.log(result)
            if (result.code === 200) {
                commit("GETUSERADDRESS", result.data)
                return "ok"
            } else {
                return Promise.reject(new Error("failed"))
            }
        },
        async getOrderInfo({commit}) {
            let result = await reqOrderInfo()
            console.log(result)
            if (result.code === 200) {
                commit("GETORDERINFO", result.data)
                return "ok"
            } else {
                return Promise.reject(new Error("failed"))
            }
        },

    },
    mutations: {
        GETUSERADDRESS(state, address) {
            state.address = address
        },
        GETORDERINFO(state, orderInfo) {
            state.orederInfo = orderInfo
        }
    },
    state: {
        address: [],
        orederInfo: {}
    },
    //简化仓库数据
    getters: {}
}