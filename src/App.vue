/*
* @Author: wanghao
* @Date: 2020-03-27 15:26:01
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 11:38:25
*/
<template>
  <div id='app'>
    <!-- <transition :name="'fade'"> -->
      <!-- <keep-alive> -->
        <!-- <router-view v-if="$route.meta.keepAlive" /> -->
      <!-- </keep-alive> -->
    <!-- </transition> -->
    <!-- <transition :name="'fade'"> -->
      <!-- <router-view v-if="!$route.meta.keepAlive" /> -->
    <!-- </transition> -->
     <transition  :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition  :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
    <!-- 全局loading -->
    <loading v-if="loadingStatus"></loading>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'slide-right',  // 默认动态路由变化为slide-right
        // 显示loading
        loadingStatus:true
      }
    },
    created() {

    },
    methods: {

    },
    mounted(){
      this.loadingStatus=false;
    },
    watch: {
      '$route'(to, from) {
        let isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }
</script>
<style lang='less' scoped>
</style>