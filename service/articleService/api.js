/*
 * @Author: your name
 * @Date: 2020-04-17 03:38:31
 * @LastEditTime: 2020-04-18 03:29:20
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
        console.log(ctx.request.query)
        let q = ctx.request.query;
        let query = {
            status: true
        }
        if(q.tag) {
            query.tag = {$in:q.tag}
        }
        let list = await Article.find(query); 
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: list
        }
        next();
    },
    articleGetContent: async (ctx, next) => {
        let query = ctx.request.query;
        console.log(query)
        let art = await Article.findById(query.id, {content: 1, title: 1});
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: art
        }
        next();
    }
}