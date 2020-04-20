/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:26:06 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 14:08:44
 */
import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;

/**
 * 引入公用方法
 */
import '@/libs/mixin';
/**
 * 注册全局组件
 */
import '@/components/index';
/**
 * Vant CSS组件库
 */
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

/**
 * 引入初始化css样式
 */
import '@/assets/style/reset.less';

/**
 * 移动端适配 Rem
 */
import '@/libs/rem.js';

/**
 * 引入路由模块
 */
import router  from './router/index';

/**
 * 引入vconsole,移动端控制台
 */
import VConsole from 'vconsole'
// var vConsole = new VConsole();

/**
 * vuex
 */
import store from './store';

new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')
