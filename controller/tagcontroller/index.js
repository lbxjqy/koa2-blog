/*
 * @Author: your name
 * @Date: 2020-03-26 20:14:16
 * @LastEditTime: 2020-04-08 23:11:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/controller/tagcontroller/index.js
 */
var router = require('koa-router')({
    prefix: '/api/tag'
});
var tagService = require('../../service/tagService')

router.get('/list', tagService.list)
router.post('/create', tagService.create)
router.post('/modify', tagService.modify)
router.post('/delete', tagService.delete)

module.exports = router;