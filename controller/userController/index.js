/*
 * @Author: your name
 * @Date: 2020-04-11 02:24:27
 * @LastEditTime: 2020-04-11 04:44:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/controller/userController/index.js
 */
var router = require('koa-router')({
    prefix: '/api/admin/user'
});
var userService = require('../../service/userService')

router.post('/login', userService.login)
router.post('/register', userService.register)
router.get('/info', userService.info)

module.exports = router;