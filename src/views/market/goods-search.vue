/*
* @Author: wanghao
* @Date: 2020-04-20 15:43:40
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 16:53:34
*/
<!-- 商品搜索页 -->
<template>
    <div class='goods-search'>
         <nav class="flex align-center justify-between"> 
            <van-icon name="arrow-left"  @click="goToReplace('index')"/> 
            <van-search shape="round" v-model="searchValue" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
        </nav>
        <div class="main">
            <div class="title">搜索历史</div>
            <div class="history-box flex flex-wrap">
                <div class="item " v-for="n in 5" :key="n">
                    <div  @click="searchValue='搜索历史'">搜索历史搜索</div>
                </div>
            </div>
            <div class="title">热门搜索</div>
            <div class="history-box flex flex-wrap">
                <div class="item " v-for="n in 5" :key="n">
                    <div  @click="searchValue='新品哈哈'">新品哈哈</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: 'goods-search',
        data() {
            return {
                // 搜索关键词
                searchValue:""
            }
        },
        created() {

        },
        watch:{
            searchValue(v){
                console.log("关键词",v);
            }
        },
        methods: {
            onSearch(val) {
                Toast(val);
            },
            onCancel() {
                Toast('取消');
            },
        }
    }
</script>
<style lang='less' scoped>
    .goods-search {
        height: 100vh;
        background: #fff;
        overflow: hidden;
         nav{
             background: #fff;
             color: #737373;
            .van-icon{
                width: 30px;
                text-align: center;
            }
            .van-search__action{
                color: #737373;
            }
            /deep/ .van-search{
                width: 100%;
                padding: 10px 0;
            }
        }
        .main{
            height: calc(100vh - 60px);
            padding: 10px 10px;
            overflow-y: scroll;
            border-top: 1px solid #f6f6f6;
            .title{

            }
            .history-box{
                padding: 10px 0;
                .item{
                    padding: 3px 5px;
                    font-size: 12px;
                    color: #737373;
                     >div{
                        border-radius: 5px;
                        border: 1px solid #666;
                        padding: 2px 5px;
                    }
                }
               
            }
        }
    }
</style>