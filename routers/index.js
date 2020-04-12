/*
 * @Author: your name
 * @Date: 2020-03-26 00:01:51
 * @LastEditTime: 2020-04-11 02:37:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/routers/index.js
 */
const tagController = require('../controller/tagController');
const articleConeroller = require('../controller/articleController');
const userConeroller = require('../controller/userController');

module.exports = app => {
    app.use(tagController.routes(), tagController.allowedMethods())
    app.use(articleConeroller.routes(), articleConeroller.allowedMethods())
    app.use(userConeroller.routes(), userConeroller.allowedMethods())
}
