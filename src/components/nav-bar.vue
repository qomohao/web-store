/*
 * @Author: wanghao 
 * @Date: 2020-04-03 15:27:48 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-03 17:04:56
 */
<!-- 顶部导航 -->
<template>
  <div class="nav-bar" :class="theme">
    <van-nav-bar
        :title="title||$route.meta.title"
        left-arrow
        @click-left="onClickLeft"
        :right-text="rigntText||''"
        @click-right="onClickRight">
        <slot></slot>
        <van-icon :name="icon" slot="right" v-if="icon"/>
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    name:'nav-bar',
    props:[
      'title',
      'theme',
      'rigntText',
       'icon'
    ],
    data(){
      return {

      }
    },
    methods:{
      onClickLeft(){
        if(this.$parent.onClickLeft){
          this.$parent.onClickLeft();
        }else{
          this.$router.go(-1);
        }
      },
      onClickRight(){
        this.$emit('onClickRight');
      },
    }
  }
</script>

<style lang="less" scoped>
  .nav-bar{
    width: 100%;
    .van-nav-bar{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: 0;
      border-bottom: 1px solid #f6f6f6;
      .van-nav-bar__title{
        color:#4E4E4E;
        font-size: 16px;
        font-weight: 500;
        font-family:PingFangSC-Medium,PingFang SC;
      }
      .van-nav-bar__text{
        font-size:  14px;
        color: #737373;
      }
       .van-icon{
         color:#737373;
         font-size: 14px;
       }
      .van-nav-bar__text:active{
        background: #fff;
      }
    }
  }
.van-hairline--bottom::after{
  border-bottom-width:0;
}
</style>
