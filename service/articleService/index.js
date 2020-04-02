/*
 * @Author: your name
 * @Date: 2020-04-02 04:49:23
 * @LastEditTime: 2020-04-02 04:54:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/service/articleService/index.js
 */
var Article = require('../../models/article')

module.exports = {
    create: async (ctx, next) => {
        let article = {
            name: ctx.name
        }
        let a = await Article.create(article)
        ctx.body = a;
    }
}