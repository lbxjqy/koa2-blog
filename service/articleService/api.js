/*
 * @Author: your name
 * @Date: 2020-04-17 03:38:31
 * @LastEditTime: 2020-04-17 03:50:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/service/articleService/api.js
 */
var Article = require('../../models/article')

module.exports = {
    homePageHotList: async (ctx, next) => {
        let list = await Article.find({status: true}); 
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: list
        }
        next();
    },
    homePageList: async (ctx, next) => {
        let list = await Article.find({status: true}); 
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: list
        }
        next();
    }
}