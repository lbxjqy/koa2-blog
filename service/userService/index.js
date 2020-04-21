/*
 * @Author: your name
 * @Date: 2020-04-11 02:24:40
 * @LastEditTime: 2020-04-21 23:28:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/service/userService/index.js
 */
var User = require('../../models/user')

module.exports = {
    login: async (ctx, next) => {
        let body = ctx.request.body;
        let u = {
            account: body.account,
            password: body.password
        }
        let r = await User.findOne(u)
        if(!r) {
            ctx.response.status = 200;
            ctx.body = {
                code: 10001,
                msg: '账号或密码错误',
            }
            next();
        } else {
            ctx.response.status = 200;
            ctx.body = {
                code: 10000,
                msg: 'SUCCESS',
                token: r.token
            }
            next();
        }
    },
    register: async (ctx, next) => {
        let body = ctx.request.body;
        let u = {
            account: body.account,
            password: body.password,
            roles: body.roles,
            avatar: body.avatar,
            name: body.name,
            token: 'user_token' + body.account
        }
        let r = await User.create(u)
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS'
        }
        next();
    },
    info: async (ctx, next) => {
        let query = ctx.query;
        console.log(query)
        let r = await User.findOne({token: query.token})
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: r
        }
        next();
    }
}