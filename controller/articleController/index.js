/*
 * @Author: your name
 * @Date: 2020-04-02 04:47:53
 * @LastEditTime: 2020-04-02 04:48:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/controller/articleController/index.js
 */
var router = require('koa-router')({
    prefix: '/api/tag'
});
var articleService = require('../../service/articleService')

router.put('/create', articleService.create)

module.exports = router;