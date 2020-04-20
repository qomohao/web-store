/*
 * @Author: wanghao 
 * @Date: 2020-03-30 10:05:59 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 15:44:54
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
    // 商品搜索
    {
        path: '/goods-search',
        name: "goods-search",
        meta: {
            title: '商品搜索',
        },
        component: () => import( /* webpackChunkName: "group-foo" */ '@/views/market/goods-search.vue'),
    },
    
]
