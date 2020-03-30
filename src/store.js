/*
 * @Author: wanghao 
 * @Date: 2020-03-30 11:48:25 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-30 11:52:36
 */
// Vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 选中地址信息
        address: null,
        marketFilter:false
    },
    mutations: {
        // 设置选中地址
        setAddress(state, data) {
            state.address = data;
        },
        setmarketFilter(state, data) {
            state.marketFilter=data;
        },
    },
    actions: {}
})


