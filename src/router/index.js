/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:24:31 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-13 16:47:56
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * 重写路由的push方法 ，解除重复点击报错
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter);

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * 路由列表
 */
// 项目主模块
import main_router from './main';
// 商城模块
import market_router from './market';

const router = new VueRouter({
    mode: 'history',
    routes: [].concat(
        main_router,
        market_router
    ),
    // 页面滚动行为
    scrollBehavior (to, from, savedPosition) {
        // console.log(from)
        // console.log(to)
        // console.log(savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
            　　from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition ||0}
        }
    }
})

// 前置守卫
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
})

// 后置守卫
router.afterEach(route => {
    NProgress.done();
})
export default router;