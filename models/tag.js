/*
 * @Author: your name
 * @Date: 2020-03-26 19:15:14
 * @LastEditTime: 2020-04-12 02:23:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/models/tag.js
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema 
/**
 * 标签
 */ 
const tagSchema = new Schema({
    name:{ type: String },
    describe: { type: String },//描述
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = Profile = mongoose.model('tag',tagSchema)
