/*
 * @Author: your name
 * @Date: 2020-04-11 02:41:28
 * @LastEditTime: 2020-04-11 04:49:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/models/user.js
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema 
/**
 * 文章
 */ 
const userSchema = new Schema({
    account: { type: String},
    password: {type: String},
    roles: [{ type: String}],
    avatar: { type: String, default:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'},
    name: { type: String, default:'admin-'},
    token: { type: String},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})

module.exports = Profile = mongoose.model('user',userSchema)
