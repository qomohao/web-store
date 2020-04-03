/*
* @Author: wanghao
* @Date: 2020-03-30 10:03:43
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-03 16:36:24
*/
<!-- goods-detail -->
<template>
    <div class='goods-detail'>
        <nav-bar></nav-bar>
        <div class="main">
            <!-- 轮播图 -->
            <van-swipe :show-indicators='false' :autoplay="3000" indicator-color="white" class="margin-bottom-10">
                <van-swipe-item v-for="(v,i) in images" :key="i">
                    <van-image width="100%" height="300px" fit="cover" :src="v"></van-image>
                </van-swipe-item>
            </van-swipe>
            <h1>商品详情页</h1>
            <h1>1111111</h1>
            <h1>2222222222</h1>
            <h1>商品详情页</h1>
            <h1>3333333333</h1>
            <h1>44444444444</h1>
            <h1>商品详情页</h1>
            <h1>5555555555</h1>
            <h1>商品详情页</h1>
            <h1>6666666666</h1>
            <h1>商品详情页</h1>
            <h1>商品详情页</h1>
            <!-- 底部按钮 -->
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="cart-o" text="购物车" />
                <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
                <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" />
                <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
            </van-goods-action>
            <!-- 规格弹窗 -->
             <!-- <van-sku
                v-model="show"
                :sku="sku"
                :goods="goods"
                :goods-id="goodsId"
                :quota="quota"
                :quota-used="quotaUsed"
                :hide-stock="sku.hide_stock"
                :message-config="messageConfig"
                @buy-clicked="onBuyClicked"
                @add-cart="onAddCartClicked"
            /> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'goods-detail',
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
                show: true,
                sku: {
                    // 数据结构见下方文档
                },
                goods: {
                    // 数据结构见下方文档
                },
                messageConfig: {
                    // 数据结构见下方文档
                }
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>
<style lang='less' scoped>
    .goods-detail {
        .main {}
    }
</style>