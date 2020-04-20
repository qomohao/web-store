/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:24:25 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 16:14:02
 */

// import Vue from "vue"
// import { Toast } from 'vant';
Vue.mixin({
  data() {
    return {
      // imgUrl:'http://127.0.0.1:3000/upload/',
    }
  },
  methods: {
    /**
     * 页面跳转
     * @param { String } pathName 页面pathName
     * @param { Object } queryObj 页面参数
     */
    goToPage(pathName, queryObj = {}, params = {}) {
      this.$router.push({
        name: pathName,
        query: queryObj,
        params
      });
    },
    /**
     * 页面reload
     */
    reload() {
      location.href=location.href.split('#')[0]
    },
     /**
     *时间格式转换
     */
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }
  }
})
import Vue from "vue"

Vue.mixin({
  data() {
    return {
      imgUrl:'http://127.0.0.1:3000/upload/',
    }
  },
  methods: {
    /**
     * 页面跳转
     * @param { String } pathName 页面pathName
     * @param { Object } queryObj 页面参数
     */
    goToPage(pathName, queryObj = {}, params = {}) {
      this.$router.push({
        name: pathName,
        query: queryObj,
        params
      });
    },
    /**
     * 页面跳转
     * @param { String } pathName 页面pathName
     * @param { Object } queryObj 页面参数
     */
    goToReplace(pathName, queryObj = {}, params = {}) {
      this.$router.replace({
        name: pathName,
        query: queryObj,
        params
      });
    },
    /**
     * 页面reload
     */
    reload() {
      location.href=location.href.split('#')[0]
    },
     /**
     *时间格式转换
     */
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }
  }
})
