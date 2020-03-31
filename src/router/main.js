/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:24:37 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-31 11:08:58
 */
// 项目主模块
export default [{
    path: '/',
    name: "home",
    meta: {
        title: '新商城',
    },
    component: () => import( /* webpackChunkName: "group-foo" */ '@/views/home.vue'),
    redirect: 'aaa',
    // 主模块
    children: [
        {
            path: '/aaa',
            name: "aaa",
            meta: {
                title: 'aaa', 
            },
            component: () => import( /* webpackChunkName: "group-foo" */ '@/views/main/aaa.vue'),
        },
        {
            path: '/bbb',
            name: "bbb",
            meta: {
                title: 'bbb',
            },
            component: () => import( /* webpackChunkName: "group-foo" */ '@/views/main/bbb.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/market-category',
            name: "market-category",
            meta: {
                title: '品牌、分类',
            },
            component: () => import( /* webpackChunkName: "group-foo" */ '@/views/main/market-category.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/mine',
            name: "mine",
            meta: {
                title: '个人信息',
            },
            component: () => import( /* webpackChunkName: "group-foo" */ '@/views/main/mine.vue'),
        },
]
}, ]