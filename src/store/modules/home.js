//home的小仓库
import {reqCategoryList, reqBannerList, reqFloorList} from "@/api";




export default {
    namespaced: true,
    actions: {
        async categoryList({commit}) {
            let result = await reqCategoryList()
            // console.log(result)
            if (result.code === 200) {
                commit('CATEGORYLIST', result.data)
            }
        },
        async getBannerList({commit}) {
            let result = await reqBannerList()
            console.log(result)
            if (result.code === 200) {
                commit('BANNERLIST', result.data)

            }
        },
        async getFloorList({commit}) {
            let result = await reqFloorList()
            console.log(result)
            if (result.code === 200) {
                commit('FLOORLIST', result.data)

            }
        },
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        },
        BANNERLIST(state, bannerList) {
            state.bannerList = bannerList
        },
        FLOORLIST(state, floorList) {
            state.floorList = floorList
        },
    },
    state: {
        //home菜单中三级菜单的数据
        categoryList: [],
        //轮播图的数据
        bannerList: [],
        floorList: [],
    },
    getters: {

    }
}