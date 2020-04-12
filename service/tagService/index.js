/*
 * @Author: your name
 * @Date: 2020-03-26 20:23:35
 * @LastEditTime: 2020-04-12 23:16:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/service/tagServive/index.js
 */
var Tag = require('../../models/tag')

module.exports = {
    create: async (ctx, next) => {
        let body = ctx.request.body;
        console.log(body)
        let tag = {
            name: body.name,
            describe: body.describe
        }
        let u = await Tag.create(tag)
        // 返回结果
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
        }
        next();
    },
    list: async (ctx, next) => {
        let list = await Tag.find({status: true}); 
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
        let tag = {
            name: body.name,
            describe: body.describe
        }
        let t = await Tag.findOneAndUpdate({_id:body._id},{ $set: tag})
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS'
        }
        next();
    },
    delete: async (ctx, next) => {
        let body = ctx.request.body;
        let t = await Tag.findOneAndUpdate({_id:body._id}, { $set: {status: false}})
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS'
        }
        next();
    }
}