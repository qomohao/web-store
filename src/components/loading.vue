/*
* @Author: wanghao
* @Date: 2020-04-20 11:28:48
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-04-20 11:39:03
*/
<!-- 封装全局loading -->
<template>
    <div class='loading' @touchmove.prevent>
        <div class="main">
           **  项目loading...
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading',
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
    .loading {
        height: 100vh;
        overflow: hidden;
         .main{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
            background: orange;
            line-height: 100vh;
            font-size: .36rem;
            text-align: center;
            overflow: hidden;
        }
    }
</style>