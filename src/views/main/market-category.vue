/*
* @Author: wanghao
* @Date: 2020-03-30 17:21:32
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-30 18:33:40
*/
<!-- 品牌、分类 -->
<template>
    <div class='market-category flex justify-between'>
        <div class="category-left">
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item title="标签名标签名1标签名1标签名1标签名11" class="ellipsis-row-1"/>
                <van-sidebar-item title="标签名2" />
                <van-sidebar-item title="标签名3" />
                <van-sidebar-item title="标签名1" />
                <van-sidebar-item title="标签名2" />
                <van-sidebar-item title="标签名3" />
                <van-sidebar-item title="标签名1" />
                <van-sidebar-item title="标签名2" />
                <van-sidebar-item title="标签名3" />
                <van-sidebar-item title="标签名1" />
             </van-sidebar>
        </div>
        <div class="category-right flex justify-between flex-wrap">
           <div class="item" v-for="n in 28" :key="n">
               <van-image
                    width="100%"
                    height="60px"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                    fit="cover"
                />
                <div class="name ellipsis-row-1">耐耐克耐克克</div>
           </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'market-category',
        data() {
            return {
                activeKey: 0
            }
        },
        created() {

        },
        methods: {
            onChange(index) {
                this.$notify({ type: 'primary', message: index });
            }
        }
    }
</script>
<style lang='less' scoped>
    .market-category {
        height: calc(100vh - 60px);
        overflow: hidden;
        .category-left{
            height: 100%;
            overflow-y: scroll;
            width: 30%;
            .van-sidebar{
                width: 100%;
            }
        }
        .category-right{
            height: 100%;
            width: 70%;
            overflow-y: scroll;
            padding: 10px 5px 10px 10px ;
            .item{
                text-align: center;
                width: 25%;
                margin: 0 10px 10px 0;
                .name{
                    width: 100%;
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
          .van-sidebar-item--select{
            border-color:transparent;
            font-size:16px;
            transition: .3s;
        }
    }
    
</style>