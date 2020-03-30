/*
* @Author: wanghao
* @Date: 2020-03-27 15:26:01
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-30 17:09:12
*/
<template>
  <div id='app'>
    <!-- <transition :name="'fade'"> -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    <!-- </transition> -->
    <!-- <transition :name="'fade'"> -->
      <router-view v-if="!$route.meta.keepAlive" />
    <!-- </transition> -->
 
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    },
    // beforeRouteLeave (to, from, next) {
    //   if (to.path === '/goods-detail') {
    //     console.log(114141414)
    //     from.meta.keepAlive = true;
    //   } else {
    //     console.log(1212122)
    //     from.meta.keepAlive = false;
    //     this.$destroy()
    //   }
    //   next()
    // },
  }
</script>
<style lang='less' scoped>
</style>