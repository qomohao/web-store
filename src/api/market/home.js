/*
 * @Author: wanghao 
 * @Date: 2020-03-27 17:27:38 
 * @Last Modified by: wanghao
 * @Last Modified time: 2020-03-27 17:39:20
 */
import { $get, $post } from '@/libs/ajax.js';

/**
 * 获取商城首页商品
 * @param { Object } data 请求参数
 */
const $getGoodsList = (data = {}) => {
    return $get(
        '/api/work/faremall/queryMallGoodsList',
        Object.assign({}, data)
    )
};

export {  
    $getGoodsList,
}