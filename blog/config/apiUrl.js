/*
 * @Author: wangtao
 * @Date: 2021-11-17 13:58:29
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-12-01 22:51:51
 * @Description: file content
 */
// let ipUrl = 'http://127.0.0.1:7001/default/' //开发
let ipUrl = 'http://49.235.127.70:7001/default/' //生产

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo:ipUrl + 'getTypeInfo',  // 文章类别
    getListById:ipUrl + 'getListById/',         // 根据类别ID获得文章列表 
}
export default servicePath;