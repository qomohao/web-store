/*
* @Author: wanghao
* @Date: 2020-03-30 18:03:26
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 16:15:14
*/
<!-- 首页 -->
<template>
    <div class='index'>
        <!-- 顶部导航栏 -->
        <div class="home-nav  flex justify-between align-center">
            <div class="tabs flex justify-between align-center">
                <div>推荐</div>
                <div>
                    <van-image width="30px" height="auto" fit="fill" :src="src"></van-image>
                </div>
            </div>
            <div class="icon flex justify-between align-center">
                <div  @click="goToPage('goods-search')">
                    <van-icon name="search" />
                </div>
                <div @click="goToPage('message-center')">
                    <van-icon name="chat-o" dot />
                </div>
            </div>
        </div>
        <!-- 通知区域 -->
        <van-notice-bar mode="closeable"   color="#1989fa" background="#ecf9ff" v-if="notice">
            {{notice}}
        </van-notice-bar>
        <!-- 轮播图 -->
        <van-swipe :show-indicators='false'   :autoplay="3000" indicator-color="white"
            class="margin-bottom-10">
            <van-swipe-item v-for="(v,i) in images" :key="i">
                <van-image width="100%" height="200px" fit="cover" :src="v"></van-image>
            </van-swipe-item>
        </van-swipe>
        <!-- 金刚区 -->
        <van-swipe :show-indicators='false' :loop="false" v-if="images.length">
            <van-swipe-item>
                <div class="menu-list  flex  flex-wrap">
                    <div class="item  flex justify-center align-center" v-for="(v,i) in images.slice(0,8)" :key="i">
                        <div>
                            <van-image width="50px" height="50px" fit="fill" :src="v"></van-image>
                            <div class="name ellipsis-row-1">菜单名称</div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="images.slice(8,16).length">
                <div class="menu-list  flex  flex-wrap">
                    <div class="item  flex justify-center align-center" v-for="(v,i) in images.slice(8,16)" :key="i">
                        <div>
                            <van-image width="50px" height="50px" fit="fill" :src="v"></van-image>
                            <div class="name ellipsis-row-1">菜单名称</div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
        <!-- 活动 -->
        <div class="activity-box margin-10">
            <div class="activity-img">
                <van-image width="100%" height="180px" fit="fill" :src="src"></van-image>
            </div>
            <div class="content">
                <div class="title ellipsis-row-1">活动标题</div>
                <div class="des ellipsis-row-2">
                    活动活动描述活动描述活动活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述描述</div>
                <div class="flex align-center">
                    <div class="date">活动时间</div>
                    <div class="count">活动名额 7</div>
                </div>
            </div>
        </div>
        <!-- 新闻 -->
        <div class="news-box margin-10 flex justify-between">
            <div class="content">
                <van-image width="100%" height="80px" fit="fill" :src="src"></van-image>
            </div>
            <div class="des flex justify-between column">
                <div class="title ellipsis-row-2">
                    新闻标题新闻新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题标题新闻标题新闻标题
                </div>
                <div class="date flex justify-end align-center">新闻时间</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                src: "https://img.yzcdn.cn/vant/apple-1.jpg",
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
                // 内容通知
                notice: "通知内容11111111,333333通知内容,222222通知内容"
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>
<style lang='less' scoped>
    .index {
        padding-top:35px;
        >div {
            background: #fff;
        }
        .home-nav {
            border-bottom: 1px solid #f6f6f6;
            position: fixed;
            z-index: 9;
            width: 100%;
            height: 35px;
            top: 0;
            left: 0;
            padding: 0 8px;
            .tabs {
                >div {
                    padding-right: 8px;
                    color: #737373;
                    font-weight: 600;
                    font-size: 16px;
                }
            }
            .icon {
                .van-icon {
                    padding-left: 8px;
                    color: #737373;
                }
            }
        }
        .menu-list {
            padding: 5px;
            .item {
                width: 25%;
                padding: 3px 0;
                >div {
                    text-align: center;
                    .van-image {
                        border-radius: 50%;
                        overflow: hidden;
                        border: 1px solid #f6f6f6;
                    }
                    .name {
                        font-size: 12px;
                        color: #a2a2a2;
                    }
                }
            }
        }
        .activity-box {
            padding: 8px 5px;
            .activity-img {}
            .content {
                color: #737373;
                padding: 5px;
                font-size: 14px;
                .title {
                    font-size: 16px;
                }
                .des {
                    padding: 3px 0;
                }
                .date {
                    font-size: 12px;
                    margin-right: 10px;
                }
                .count {
                    font-size: 12px;
                }
            }
        }
        .news-box {
            padding: 8px 5px;
            .content {
                width: 100px;
                padding: 2px;
            }
            .des {
                width: calc(100% - 100px);
                font-size: 14px;
                color: #737373;
                padding: 0 5px;
                .title {}
                .date {
                    color: #a2a2a2;
                    padding: 5px 0;
                }
            }
        }
    }
</style>