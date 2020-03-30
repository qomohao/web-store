/*
* @Author: wanghao
* @Date: 2020-03-30 18:03:26
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-30 18:21:50
*/
<!-- 首页 -->
<template>
    <div class='aaa'>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe qwee" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(v,i) in images" :key="i">
                 <van-image width="100%" height="200px" fit="fill"  :src="v"></van-image>
            </van-swipe-item>
        </van-swipe>
        <!-- 金刚区 -->
        <div class="menu-list qwe  flex  flex-wrap">
            <div class="item  flex justify-center align-center"  v-for="(v,i) in images" :key="i">
                <div class="qwee">
                    <van-image width="50px" height="50px" fit="fill"  :src="v"></van-image>
                    <div class="name ellipsis-row-1">菜单名称</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 
    export default {
        name: 'aaa',
        data() {
            return {
                images: [
                        'https://img.yzcdn.cn/vant/apple-1.jpg',
                        'https://img.yzcdn.cn/vant/apple-2.jpg',
                        'https://img.yzcdn.cn/vant/apple-2.jpg',
                        'https://img.yzcdn.cn/vant/apple-2.jpg',
                        'https://img.yzcdn.cn/vant/apple-2.jpg',
                        'https://img.yzcdn.cn/vant/apple-2.jpg' 
                    ]
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>
<style lang='less' scoped>
    .aaa {
        .my-swipe{
            
        }
        .menu-list{
            padding:  5px;
            .item{
                width: 25%;
                padding: 2px 0;
                >div{
                    .van-image{
                        border-radius: 50%;
                        overflow: hidden;
                        border: 1px solid #f6f6f6;
                    }
                    .name{
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>