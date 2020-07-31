/*
 * @Author: your name
 * @Date: 2020-05-30 17:40:45
 * @LastEditTime: 2020-05-30 17:41:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg/Users/linboxuan/vscodeProjects/koa2-blog/controller/mongoController/index.js
 */
var router = require('koa-router')({
    prefix: '/api/mongo'
});
var mongoService = require('../../service/mongoService')

router.post('/create', mongoService.create)

module.exports = router;