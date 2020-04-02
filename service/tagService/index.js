/*
 * @Author: your name
 * @Date: 2020-03-26 20:23:35
 * @LastEditTime: 2020-03-26 22:11:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/service/tagServive/index.js
 */
var Tag = require('../../models/tag')

module.exports = {
    create: async (ctx, next) => {
        let tag = {
            name: ctx.name
        }
        let u = await Tag.create(tag)
        ctx.body = u;
    }
}