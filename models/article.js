/*
 * @Author: your name
 * @Date: 2020-04-02 04:54:45
 * @LastEditTime: 2020-04-12 02:36:27
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
    title:{ type: String },
    content: { type: String },//内容
    describe: { type: String },//描述
    tag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tag'}],//标签
    meta: {
		  views: { type: Number, default: 0 }, // 浏览数
		  likes: { type: Number, default: 0 }, // 喜欢数
		  comments: { type: Number, default: 0 } // 评论数
    },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})

module.exports = Profile = mongoose.model('article',articleSchema)
