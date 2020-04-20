/*
 * @Author: your name
 * @Date: 2020-04-17 03:36:07
 * @LastEditTime: 2020-04-17 03:38:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/controller/tagcontroller/api.js
 */
var router = require('koa-router')({
    prefix: '/api/tag'
});
var tagService = require('../../service/tagService/api')

router.get('/homePageList', tagService.homePageList)

module.exports = router;