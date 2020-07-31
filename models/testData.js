/*
 * @Author: your name
 * @Date: 2020-05-30 17:45:39
 * @LastEditTime: 2020-05-30 17:51:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg/Users/linboxuan/vscodeProjects/koa2-blog/models/testData.js
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema 
/**
 * 标签
 */ 
const tagSchema = new Schema({
    tid:{ type: Number },
    title: { type: String },//描述
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = Profile = mongoose.model('testdata',tagSchema)
