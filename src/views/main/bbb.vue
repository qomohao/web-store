/*
* @Author: wanghao
* @Date: 2020-03-27 15:25:44
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-30 18:15:37
*/
<!-- bbb -->
<template>
    <div class='bbb'>
        <div class="main">
            <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh"   success-text="刷新成功！" :success-duration="1000" :animation-duration="500">
                <van-list v-model="loadingFlag" :finished="finishedFlag"  finished-text="—— 我是有底线的 ——" @load="getGoodsList">
                    <div class="goods-list flex justify-between  flex-wrap">
                        <div class="item" v-for="(v,i) in dataList" :key="i" @click="goToPage('goods-detail')">
                            <div>
                                <div class="img">
                                <van-image width="100%" height="100%" fit="fill"  :src="v.goodsPath"></van-image>
                            </div>
                            <div class="title ellipsis-row-1">{{v.goodsName}}</div>
                            <div class="des ellipsis-row-1">{{v.introduce}}</div>
                            </div>
                        </div>
                    </div>
                </van-list>
            </van-pull-refresh>
               <!-- 骨架图 -->
            <van-skeleton animate :row="9" :loading="loadingFlag"
                :row-width="['90%','80%','75%','85%','75%','90%','60%','75%','65%']">  </van-skeleton>
        </div>
    </div>
</template>

<script>
    import {
        $getGoodsList
    } from "@/api/market/home"
    export default {
        name: 'bbb',
        data() {
            return {
                // 上拉刷新
                refreshLoading: false,
                // 当前页
                page: 1,
                // 加载数据
                loadingFlag: false,
                // 加载结束
                finishedFlag: false,
                // 订单列表
                dataList: []
            }
        },
        created() {
            
        },
        activated(){
            console.log("activated  bbb")
        },
        deactivated() {
            console.log("deactivated bbb")
        },
        methods: {
            // 上拉刷新
            onRefresh(){
                // 当前页
                this.page = 1,
                // 加载数据
                this.loadingFlag = false,
                // 加载结束
                this.finishedFlag = false,
                // 订单列表
                this.dataList = [];
                // 上拉刷新
                this.refreshLoading=false;
                this.getGoodsList();
            },
            // 获取商品列表
            async getGoodsList() {
                this.loadingFlag = true;
                const data = await $getGoodsList({
                    page: this.page++,
                    limit: 10,
                    mallType: 4
                });
                if (data && data.code === 0) {
                    this.loadingFlag = false;
                    if (data.data.showGoodsVOList && data.data.showGoodsVOList.length) {
                        this.dataList = this.dataList.concat(data.data.showGoodsVOList);
                        if (data.data.showGoodsVOList.length < 10) {
                            this.loadingFlag = false;
                            this.finishedFlag = true;
                        }
                    } else {
                        this.finishedFlag = true;
                    }
                    // 首次加载数据 -- 若上拉刷新 -- 清除上拉刷新loading
                    if(this.page == 2){
                        this.refreshLoading=false;
                    }
                    console.log("数据列表")
                    console.log(this.dataList);
                }
            }
        }
    }
</script>
<style lang='less' scoped>
    .bbb {
        .main {
            padding: 20px 0;
            .goods-list {
                padding: 0 5px;
                .item {
                    width: 50%;
                    padding: 5px;
                    margin-bottom: 5px;
                    >div{
                        border: 1px solid #eee;
                        border-radius: 3px;
                        overflow: hidden;
                    }
                    .img {
                        width: 100%;
                        height: 150px;
                    }
                    .title {
                        font-size: 16px;
                        padding: 5px;
                    }
                    .des {
                        font-size: 14px;
                        padding: 5px;
                    }
                }
            }
        }
    }
</style>