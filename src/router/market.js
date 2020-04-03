/*
 * @Author: wanghao 
 * @Date: 2020-03-30 10:05:59 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-03 16:58:15
 */
// 商城模块
export default [
    // 商品详情
    {
        path: '/goods-detail',
        name: "goods-detail",
        meta: {
            title: '商品详情',
        },
        component: () => import( /* webpackChunkName: "group-foo" */ '@/views/market/goods-detail.vue'),
    },
    
]
