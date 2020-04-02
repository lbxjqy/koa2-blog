/*
 * @Author: your name
 * @Date: 2020-04-02 04:54:45
 * @LastEditTime: 2020-04-02 04:55:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/models/article.js
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema 
/**
 * 文章
 */ 
const articleSchema = new Schema({
    name:{ type: String },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = Profile = mongoose.model('article',articleSchema)
