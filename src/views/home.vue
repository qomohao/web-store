/*
* @Author: wanghao
* @Date: 2020-03-27 15:25:55
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 16:14:20
*/
<!-- home -->
<template>
    <div class='home'>
        <div class="main">
            <router-view></router-view>
        </div>
        <!--  菜单项 -->
        <van-tabbar v-model="tabActiveIndex" @change="onChange">
            <van-tabbar-item  v-for="(v,i) in tabList" :key="i" @click="goReplacePage(v.pathName)">
                <span>{{v.name}}</span>
                <template #icon="props">
                    <!-- <img :src="props.active ? v.activeIcon : v.unactiveIcon" /> -->
                     <i class="iconfont" :class=" v.unactiveIcon"></i>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    
    export default {
        name: 'home',
        data() {
            return {
                tabActiveIndex: 0,
                tabList: [{
                        pathName: "index",
                        name: "首页",
                        activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
                        unactiveIcon: "icon-fenleigongnengleimu"
                    },
                    {
                        pathName: "recommend",
                        name: "推荐",
                        activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
                        unactiveIcon: "icon-jingxuan2"
                    },
                    {
                        pathName: "market-category",
                        name: "品牌",
                        activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
                        unactiveIcon: "icon-pinpai1"
                    },
                    {
                        pathName: "shop-car",
                        name: "购物车",
                        activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
                        unactiveIcon: "icon-gouwuche1"
                    },
                    {
                        pathName: "mine",
                        name: "我的",
                        activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
                        unactiveIcon: "icon-shouye"
                    }
                ],
                isBack:this.$router.isBack
            }
        },
        created() {
            /**
             * 处理刷新页面, tabActiveIndex 与页面不对应问题
             */
            const targetName = this.$route.name;
            this.tabList.forEach((item, index) => {
                if (item.pathName == targetName) {
                    this.tabActiveIndex = index;
                }
            });
        },
        watch: {
            $route(to, from) {
                /**
                 * 处理刷新页面, tabActiveIndex 与页面不对应问题
                 */
                const targetName = this.$route.name;
                this.tabList.forEach((item, index) => {
                    if (item.pathName == targetName) {
                        this.tabActiveIndex = index;
                    }
                });
            }
        },
        
        methods: {
            // 切换菜单tab
            onChange(index) {
                // this.$notify({
                //     type: 'primary',
                //     message: index
                // });
            },
            goReplacePage(pathName){
                this.$router.replace({
                    path:pathName
                })
            }
        }
    }
</script>
<style lang='less' scoped>
    .home {
        .main {
            padding-bottom: 60px;
           
        }
        /deep/ .van-tabbar-item__icon{
                color: #737373;
                .iconfont{
                    // i{
                        font-size: 28px;
                    // }
                    font-weight: 400;
                }
        }
    }
</style>