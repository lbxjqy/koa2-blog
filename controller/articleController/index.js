/*
 * @Author: your name
 * @Date: 2020-04-02 04:47:53
 * @LastEditTime: 2020-04-09 23:49:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/controller/articleController/index.js
 */
var router = require('koa-router')({
    prefix: '/api/article'
});
var articleService = require('../../service/articleService')

router.post('/create', articleService.create)
router.post('/delete', articleService.delete)
router.post('/modify', articleService.modify)
router.get('/list', articleService.list)

module.exports = router;