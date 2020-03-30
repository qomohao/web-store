/*
 * @Author: wanghao 
 * @Date: 2020-03-30 10:05:59 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-30 14:17:55
 */
// 商城模块
export default [
    // 商品详情
    {
        path: '/goods-detail',
        name: "goods-detail",
        meta: {
            title: 'goods-detail',
        },
        component: () => import( /* webpackChunkName: "group-foo" */ '@/views/market/goods-detail.vue'),
    },
]
