const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema 
/**
 * 标签
 */ 
const tagSchema = new Schema({
    name:{ type: String },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = Profile = mongoose.model('tag',tagSchema)
