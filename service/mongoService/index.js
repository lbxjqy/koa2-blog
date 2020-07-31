/*
 * @Author: your name
 * @Date: 2020-05-30 17:41:36
 * @LastEditTime: 2020-05-30 19:23:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg/Users/linboxuan/vscodeProjects/koa2-blog/service/mongoService/index.js
 */
var TestData = require('../../models/testData')
function randomString(len) {
 　　len = len || 32;
    　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
 　　var maxPos = $chars.length;
 　　var pwd = '';
 　　for (i = 0; i < len; i++) {
 　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
 　　}
    return pwd;
 }
module.exports = {
    create: async (ctx, next) => {
        for(let i = 0;i < 1000000;i++) {
            let t = {
                title: randomString(1000),
                tid: i,
            }
            await TestData.create(t)
        }
        // 返回结果
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
        }
        next();
    }
}