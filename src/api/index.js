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