var platform = require('./platform.js')

config = {
    mongo: {}
}

if(platform == "DEV") {
    config.mongo.master = 'mongodb://127.0.0.1:27017/blog'
}

if(platform == "PROD") {
    config.mongo.master = 'mongodb://root:123456@39.97.208.148:27017/blog?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
}

module.exports = config;