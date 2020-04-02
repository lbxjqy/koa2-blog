/*
 * @Author: your name
 * @Date: 2020-03-26 20:14:16
 * @LastEditTime: 2020-04-02 04:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/controller/tagcontroller/index.js
 */
var router = require('koa-router')({
    prefix: '/api/tag'
});
var tagService = require('../../service/tagService')

router.put('/create', tagService.create)

module.exports = router;