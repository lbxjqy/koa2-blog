/*
 * @Author: your name
 * @Date: 2020-04-17 03:38:36
 * @LastEditTime: 2020-04-17 03:49:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/service/tagService/api.js
 */
var Tag = require('../../models/tag')

module.exports = {
    homePageList: async (ctx, next) => {
        let list = await Tag.find({status: true}); 
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: list
        }
        next();
    },
}