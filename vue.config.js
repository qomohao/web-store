/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:23:59 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-27 17:42:03
 */
const path = require("path");

module.exports = {
    /**
     * 加载静态资源相对路径
     */
    publicPath: './',
    /**
     * 请求代理
     */
    devServer: {
        port: 8899,
        // proxy: 'http://localhost:3000'
    },
    lintOnSave:false,
    /**
     * style-resources-loader 公用样式处理
     */
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                path.resolve(__dirname, "./src/assets/style/common.less"),
            ]
        }
    },
}
