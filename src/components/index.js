/*
 * @Author: wanghao 
 * @Date: 2020-04-03 15:30:10 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 11:31:08
 */
// 注册全局组件
import Vue from 'vue';
import navBar from '@/components/nav-bar.vue';
import loaDing from '@/components/loading.vue';

Vue.component('nav-bar',navBar);
Vue.component('loading',loaDing)