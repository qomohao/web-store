/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:25:49 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-30 18:14:43
 */
<!-- mine -->
<template>
    <div class='mine'>
        <!-- 顶部信息 -->
        <div class="header qwe">
            顶部信息
        </div>
        <!-- 内容配置板块 -->
        <div class="banner qwe">
            内容配置板块
        </div>
        <!-- 订单内容 -->
        <div class="order-box">
            订单内容
        </div>
        <!-- 物流信息 -->
        <div class="express">
            物流信息
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mine',
        data() {
            return {

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
    }
</style>