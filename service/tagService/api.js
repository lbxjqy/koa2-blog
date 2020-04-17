/*
 * @Author: your name
 * @Date: 2020-04-17 03:38:36
 * @LastEditTime: 2020-04-17 23:14:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/service/tagService/api.js
 */
var Tag = require('../../models/tag')
var Article = require('../../models/article')

module.exports = {
    homePageList: async (ctx, next) => {
        // 逻辑是根据文章表的tag字段进行分组，并计算count
        const tagList = await Article.aggregate([
			{ $unwind: '$tag' },
			{
				$group: {
					_id: '$tag',
					count: { $sum: 1 }
				}
			}
		])
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: tagList
        }
        next();
    },
}