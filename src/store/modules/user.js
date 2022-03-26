import {reqGetCode, reqUserRegister} from "@/api";


export default {
    namespaced: true,
    actions: {
        //获取验证码: 返回验证码,正常是后台把验证码发到用户手机上
        async getCode({commit}, phone) {
            let result = await reqGetCode(phone)
            // console.log(result)
            if (result.code === 200) {
                commit("GETCODE", result.data)
            } else {
                return Promise.reject(new Error('failed'))
            }
        },
        async UserRegister({commit}, user) {
            let result = await reqUserRegister(user)
            console.log(result)
            if (result.code === 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('failed'))
            }
        },
    },
    mutations: {
        GETCODE(state, code) {
            state.code = code
        }
    },
    state: {
        code: ''
    },
    //简化仓库数据
    getters: {
    }
}