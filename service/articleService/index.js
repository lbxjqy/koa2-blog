/*
 * @Author: your name
 * @Date: 2020-04-02 04:49:23
 * @LastEditTime: 2020-04-09 23:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/service/articleService/index.js
 */
var Article = require('../../models/article')

module.exports = {
    create: async (ctx, next) => {
        let body = ctx.request.body;
        let article = {
            title: body.title,
            content: body.content,
            descript: body.descript,
            tag: body.tag,
        }
        let a = await Article.create(article)
        // 返回结果
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
        }
        next();
    },
    list: async (ctx, next) => {
        let list = await Article.find({status: true}); 
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: list
        }
        next();
    },
    modify: async (ctx, next) => {
        let body = ctx.request.body;
        let article = {
            title: body.title,
            content: body.content,
            descript: body.descript,
            tag: body.tag,
        }
        let a = await Article.findOneAndUpdate({_id:body.articleId},{ $set: article})
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS'
        }
        next();
    },
    delete: async (ctx, next) => {
        let body = ctx.request.body;
        let t = await Article.findOneAndUpdate({_id:body.articleId}, { $set: {status: false}})
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS'
        }
        next();
    }
}