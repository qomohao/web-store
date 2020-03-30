/*
 * @Author: wanghao 
 * @Date: 2020-03-27 15:53:59 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-27 16:31:03
 */
/**
 * 将px单位转换成rem
 */
module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 7']
      },
      'postcss-pxtorem': {
        rootValue: 16,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
        propList: ['*']
      }
    }
  }