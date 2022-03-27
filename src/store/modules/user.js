import {
    reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo,reqLogout
} from "@/api";
import {setToken} from '@/utils/token'

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
        //登录
        async userLogin({ commit }, data) {
            let result = await reqUserLogin(data);
            console.log(result)
            //服务器下发token，用户唯一标识符(uuid)
            //将来经常通过带token找服务器要用户信息进行展示
            if (result.code == 200) {
                //用户已经登录成功且获取到token
                commit("USERLOGIN", result.data.token);
                // 持久化存储token
                setToken(result.data.token);
                return "ok";
            } else {
                return Promise.reject(new Error("faile"));
            }
        },
        //获取用户信息
        async getUserInfo({commit}) {
            let result = await reqUserInfo()
            console.log(result)
            if (result.code === 200) {
                commit("GETUSERINFO", result.data)

                return "ok"
            }else {
                return  Promise.reject(new Error('faile'))
            }
        },
        //用户登出
        async userLogout({commit}) {
            let result = await reqLogout()
            // console.log(result)
            if (result.code === 200) {
                commit("CLEAR")
                return "ok"
            }else {
                return  Promise.reject(new Error('faile'))
            }
        }

    },
    mutations: {
        GETCODE(state, code) {
            state.code = code
        },
        USERLOGIN(state, token) {
            state.token = token;
        },
        GETUSERINFO(state, userInfo) {
            state.userInfo = userInfo
        },
        CLEAR(state) {
            state.token = ''
            state.userInfo = {}
            localStorage.removeItem("TOKEN")
        }
    },
    state: {
        code: '',
        token: localStorage.getItem("TOKEN"),
        userInfo: {},

    },
    //简化仓库数据
    getters: {
    }
}