/*
 * @Author: your name
 * @Date: 2020-04-17 03:38:31
 * @LastEditTime: 2020-04-25 03:10:23
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
            // 包含query tag
            query.tag = {$in:q.tag}
        }
        if(q.title) {
            query.title = {$regex: q.title}
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
        // let art = await Article.findById(query.id, {content: 1, title: 1});
        // 更新views+=1 并返回title content
        let art = await Article.findByIdAndUpdate(query.id, {$inc: {"meta.views": 1}},{select: {content: 1, title: 1}})
        if(!art) {
            ctx.body = {
                code: 10001,
                msg: 'NOT FOUNT ARTICLE',
            }
        }
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: art
        }
        next();
    }
}