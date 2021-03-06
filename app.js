/*
 * @Author: your name
 * @Date: 2020-03-26 00:01:51
 * @LastEditTime: 2020-05-24 15:00:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/blog/app.js
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const config = require('./config')
const routers = require('./routers')

// error handler
onerror(app)

//db
mongoose.connect(config.mongo.master, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', true);
mongoose.connection.on("open", () => {
    console.log("mongoose connection succss")
})
mongoose.connection.on("close", () => {
    console.log("mongoose connection close")
})

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(async (ctx, next) => {
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200
  }
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  ctx.set("Access-Control-Allow-Headers", 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, Access-Token, x-token');
  await next()
});

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
routers(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
