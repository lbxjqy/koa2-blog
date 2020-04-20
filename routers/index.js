/*
 * @Author: your name
 * @Date: 2020-03-26 00:01:51
 * @LastEditTime: 2020-04-21 02:40:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/routers/index.js
 */
// const tagAdminController = require('../controller/tagController');
// const articleAdminConeroller = require('../controller/articleController');
// const userConeroller = require('../controller/userController');
const articleConeroller = require('../controller/articleController/api')
const tagController = require('../controller/tagController/api')

module.exports = app => {
    // app.use(tagAdminController.routes(), tagAdminController.allowedMethods())
    // app.use(articleAdminConeroller.routes(), articleAdminConeroller.allowedMethods())
    // app.use(userConeroller.routes(), userConeroller.allowedMethods())
    app.use(articleConeroller.routes(), articleConeroller.allowedMethods())
    app.use(tagController.routes(), tagController.allowedMethods())
}
