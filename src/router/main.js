/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:24:37 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-03 17:14:18
 */
// 项目主模块
export default [{
        path: '/',
        name: "",
        meta: {
            title: '新商城',
        },
        component: () => import( /* webpackChunkName: "group-foo" */ '@/views/home.vue'),
        redirect: 'index',
        // 主模块
        children: [{
                path: '/index',
                name: "index",
                meta: {
                    title: 'index',
                },
                component: () => import( /* webpackChunkName: "group-foo" */ '@/views/main/index.vue'),
            },
            {
                path: '/recommend',
                name: "recommend",
                meta: {
                    title: '商城模板',
                },
                component: () => import( /* webpackChunkName: "group-foo" */ '@/views/main/recommend.vue'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: '/market-category',
                name: "market-category",
                meta: {
                    title: '品牌、分类',
                    keepAlive: true
                },
                component: () => import( /* webpackChunkName: "group-foo" */ '@/views/main/market-category.vue'),
            },
            // 购物车
            {
                path: '/shop-car',
                name: "shop-car",
                meta: {
                    title: '购物车',
                },
                component: () => import( /* webpackChunkName: "group-foo" */ '@/views/market/shop-car.vue'),
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
    },
    // 消息中心
    {
        path: '/message-center',
        name: "message-center",
        meta: {
            title: '消息中心',
        },
        component: () => import( /* webpackChunkName: "group-foo" */ '@/views/main/message-center.vue'),
    },
]