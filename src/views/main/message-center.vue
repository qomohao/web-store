/*
* @Author: wanghao
* @Date: 2020-04-03 15:32:24
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-03 16:11:06
*/
<!-- 消息中心 -->
<template>
    <div class='message-center'>
        <nav-bar></nav-bar>
        <div class="main">
            <van-collapse v-model="activeNames"> 
                <!-- 客服消息 -->
                <van-collapse-item  icon="service-o" name="1" >
                    <template #title>
                      客服消息
                    </template>
                    您好！我们会尽快处理您所反馈的问题，请保持电话畅通！
                </van-collapse-item>
                <!-- 系统通知 -->
                <van-collapse-item title="系统升级通知" name="2"  icon="envelop-o" > 
                    系统升级通知 V1.0.1, 修复了一些问题
                </van-collapse-item>
                <!-- 促销活动 -->
                <van-collapse-item title="春季新品" name="3"  icon="new-arrival-o" >  
                    春季新品春季新品春季新品春季新品春季新品春季新品春季新品春季新品春季新品春季新品春季新品
                </van-collapse-item>
                <!-- 收到礼物 -->
                <van-collapse-item title="礼物" name="4"  icon="point-gift-o" >  
                    祝你生日快乐！您的同事***送您一朵小发发
                </van-collapse-item>
                <!-- 订单物流信息 -->
                 <van-collapse-item title="物流信息" name="5"  icon="logistics" >  
                    祝你生日快乐！您的同事***送您一朵小发发
                </van-collapse-item>
               
            </van-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'message-center',
        data() {
            return {
                activeNames: ['1']
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>
<style lang='less' scoped>
    .message-center {
        .main{
            margin-top: 45px;
            .van-collapse-item{
                margin-bottom: 5px;
            }
        }
    }
</style>