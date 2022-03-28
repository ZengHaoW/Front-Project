import requests from "@/api/request";
import mockRequests from '@/api/mockAjax'
//三级联动文档

export const reqCategoryList = () => requests(
    {url: '/product/getBaseCategoryList', method: 'get'}
)


export const reqBannerList = () => mockRequests(
    {url: '/banner', method: 'get'}
)

export const reqFloorList = () => mockRequests(
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

export const reqDeletCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})

export const reqUpdateCheckedByid = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
});

export const reqGetCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})

export const reqUserRegister = (data) => requests({
    url: '/user/passport/register',
    data,
    method: 'post'
})

export const reqUserLogin = (data) => requests({
    url: '/user/passport/login',
    data,
    method: 'post'
});

export const reqUserInfo = () => requests({
    url: '/user/passport/auth/getUserInfo',
    methods: 'get',
})

export const reqLogout = () => requests({
    url: 'user/passport/logout',
    method: 'get',
})

export const reqAddressInfo = () => requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
})

export const reqOrderInfo = () => requests({
    url: '/order/auth/trade',
    method: 'get'
})