/*
 * @Author: your name
 * @Date: 2020-04-17 03:36:04
 * @LastEditTime: 2020-04-18 02:28:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/controller/articleController/api.js
 */
var router = require('koa-router')({
    prefix: '/api/article'
});
var articleService = require('../../service/articleService/api')

router.get('/homePageHotList', articleService.homePageHotList)
router.get('/homePageList', articleService.homePageList)
router.get('/articleGetContent', articleService.articleGetContent)

module.exports = router;