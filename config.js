var platform = require('./platform.js')

config = {
    mongo: {}
}

if(platform == "DEV") {
    config.mongo.master = 'mongodb://127.0.0.1:27017/blog'
}

if(platform == "PROD") {

}

module.exports = config;