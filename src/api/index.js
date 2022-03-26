import requests from "@/api/request";
import mockRequests from '@/api/mockAjax'
//三级联动文档

export const reqCategoryList = () => requests(
    {url: '/product/getBaseCategoryList', method: 'get'}
)


export const reqBannerList= () => mockRequests(
    {url: '/banner', method: 'get'}
)

export const reqFloorList= () => mockRequests(
    {url: '/floor', method: 'get'}
)
//params至少是一个空对象
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get',
})

export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
})

export const reqCartList = () => requests({
    url: '/cart/cartList',
    methods: 'get'
})