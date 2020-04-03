/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:25:49 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-03 15:26:53
 */
<!-- mine -->
<template>
    <div class='mine'>
        <!-- 顶部信息 -->
        <div class="header flex justify-between align-center">
            <div class="flex justify-between align-center">
                <van-image class="border-radius-50" width="60px" height="60px" fit="cover" :src="src"></van-image>
                <div class="info">
                    <div class="ellipsis-row-1">姓名：张三</div>
                    <div class="ellipsis-row-1">金币：9999999</div>
                    <div class="ellipsis-row-1">其他信息</div>
                </div>
                <!-- <div class="info">
                    <div class="ellipsis-row-1">未登录</div>
                </div> -->
            </div>
            <van-icon name="arrow"/>
        </div>
        <!-- 内容配置板块 -->
        <div class="banner">
            <!-- 轮播图 -->
            <van-swipe :show-indicators='false'   :autoplay="3000" indicator-color="white" >
                <van-swipe-item v-for="n in 2" :key="n">
                    <van-image width="100%" height="50px" fit="cover" :src="src"></van-image>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 订单内容 -->
        <div class="order-box flex justify-between align-center">
            <div class="item">
                <van-icon name="shopping-cart-o" />
                <div class="name">购物车</div>
            </div>
             <div class="item">
                <van-icon name="todo-list-o" />
                <div class="name">待付款</div>
            </div>
             <div class="item">
                <van-icon name="send-gift-o" />
                <div class="name">待收货</div>
            </div>
             <div class="item">
                <van-icon name="service-o" />
                <div class="name">售后</div>
            </div>
        </div>
        <!-- 物流信息 -->
        <div class="express">
            <!-- 通知区域 -->
            <van-notice-bar mode="closeable">
                您的包裹已到达上海市您的包裹已到达上海市  您的包裹已到达上海市  您的包裹已到达上海市  您的包裹已到达上海市    
            </van-notice-bar>
            <van-card
                num="2"
                tag="最新物流"
                price="2.00"
                desc="描述描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息信息"
                title="商品商品标题商 品 标题商品标题商品标题商品标题标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                origin-price="10.00"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mine',
        data() {
            return {
                src: "https://img.yzcdn.cn/vant/apple-1.jpg",
            }
        },
        created() {

        },
        
        methods: {

        }
    }
</script>
<style lang='less' scoped>
    .mine {
        >div{
            background: #fff;
            margin-bottom: 10px;
        }
        .header{
            background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
            color: #fff;
            padding: 20px 10px;
            .info{
                width: 150px;
                margin-left: 10px;
                font-size: 14px;
            }
            .van-icon{
                font-size: 20px;
                height: 100%;
            }
        }
        .banner{

        }
        .order-box{
            padding: 10px 5px;
            .item{
                width: 25%;
                text-align: center;
                .van-icon{
                    font-size: 26px;
                    color: rgb(96, 112, 192);
                }
                .name{
                    color: #737373;
                    font-size: 12px;
                }
            }
        }
        .express{
            .van-card{
                background: #fff;
            }
        }
    }
</style>