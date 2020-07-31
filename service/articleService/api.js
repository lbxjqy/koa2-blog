/*
 * @Author: your name
 * @Date: 2020-04-17 03:38:31
 * @LastEditTime: 2020-04-25 03:05:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/koa2-blog/service/articleService/api.js
 */
var Article = require('../../models/article')
var axios = require('axios');
var md5 = require('md5');
var xml2js = require('xml2js');

module.exports = {
    homePageHotList: async (ctx, next) => {
        let list = await Article.find({status: true}); 
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: list
        }
        next();
    },
    homePageList: async (ctx, next) => {
        console.log(ctx.request.query)
        let q = ctx.request.query;
        let query = {
            status: true
        }
        if(q.tag) {
            // 包含query tag
            query.tag = {$in:q.tag}
        }
        if(q.title) {
            query.title = {$regex: q.title}
        }
        let list = await Article.find(query); 
        ctx.response.status = 200;
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: list
        }
        next();
    },
    articleGetContent: async (ctx, next) => {
        let query = ctx.request.query;
        // let art = await Article.findById(query.id, {content: 1, title: 1});
        // 更新views+=1 并返回title content
        let art = await Article.findByIdAndUpdate(query.id, {$inc: {"meta.views": 1}},{select: {content: 1, title: 1}})
        if(!art) {
            ctx.body = {
                code: 10001,
                msg: 'NOT FOUNT ARTICLE',
            }
        }
        ctx.body = {
            code: 10000,
            msg: 'SUCCESS',
            data: art
        }
        next();
    },
    pay: async(ctx, next) => {
        // let params = {
        //     "partner" : "2019022163300183" ,
        //     "seller_id" : "353494220@qq.com" ,
        //     "out_trade_no" : "1" ,
        //     "subject" : "1" ,
        //     "body" : "1" ,
        //     "total_fee" : "1",
        //     "service" : "alipay.trade.app.pay" ,
        //     "payment_type" : "1" ,
        //     "_input_charset" : "utf-8" ,
        //     "it_b_pay" : "10m" ,
        //     "notify_url" : "1" ,
        //     "enable_paymethod" : "balance,moneyFund,coupon,pcredit,pcreditpayInstallment,creditCard,creditCardExpress,creditCardCartoon,credit_group,debitCardExpress,mcard,pcard,promotion" ,
        //     "sign" : "1" ,
        //     "sign_type" : "RSA2",
        // }
        // let str = "";
        // for(var k in params) {
        //     console.log(k)
        //     str += k + "=\"" + params[k] + "\"&";
        // }
        // str = str.substr(0,str.length-1)
        // ctx.body = {
        //     code: 10000,
        //     msg: 'SUCCESS',
        //     data: str
        // }
        // next();

        var unifiedorderUrl = "https://api.mch.weixin.qq.com/pay/unifiedorder";
       var opts = {};
        opts.nonce_str = WxPayUtil.generateNonceString();
       
        opts.appid = 'wx05b764a334ca0472';

        opts.mch_id = '1232813602';

        opts.device_info = "WEB";

        opts.sign = 'CE7022B710720E681230CE61CC3F6D9625115E07B3EFF1E740174F5EBC22026D';

        opts.body="1111";
        opts.out_trade_no="123123123";
        opts.total_fee=123123;
        opts.spbill_create_ip="192.169.1.1";
        opts.notify_url = "https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1",
        opts.trade_type = "APP"



        var postXml = WxPayUtil.buildXML({ xml: opts });

        // console.log("微信付款单请求postXml",postXml);

        axios.post(unifiedorderUrl, postXml).then(function(result) {

            // console.log("微信付款单请求result.data",result.data);
            
           WxPayUtil.parseXML(result.data,function(json){
                console.log(json)
           });

        }).catch(function(error){
            console.log("微信生成付款单错误",error);
        })
    }
}

WxPayUtil = {
    generateNonceString: function(length) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var maxPos = chars.length;
        var noceStr = "";
        for (var i = 0; i < (length || 32); i++) {
            noceStr += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return noceStr;
    },
    mix: function() {
        var root = arguments[0];
        if (arguments.length == 1) {
            return root;
        }
        for (var i = 1; i < arguments.length; i++) {
            for (var k in arguments[i]) {
                root[k] = arguments[i][k];
            }
        }
        return root;
    },
    encodeUTF8: function(str) {
        var temp = "",
            rs = "";
        for (var i = 0, len = str.length; i < len; i++) {
            temp = str.charCodeAt(i).toString(16);
            rs += "\\u" + new Array(5 - temp.length).join("0") + temp;
        }
        return rs;
    },
    buildXML: function(json) {

        var builder = new xml2js.Builder();
        return builder.buildObject(json);
    },
    parseXML: function(xml, func) {
        // var parser = new xml2js.Parser({ trim: true, explicitArray: false, explicitRoot: false });
        xml2js.parseString(xml, { trim: true, explicitArray: false, explicitRoot: false },function(err,result){
            if(err){
                console.log(err);
            }else{
                func(result)
            }
        });
    },
    sign: function(param) {
        var querystring = Object.keys(param).filter(function(key) {
            return param[key] !== undefined && param[key] !== '' && ['pfx', 'partner_key', 'sign', 'key'].indexOf(key) < 0;
        }).sort().map(function(key) {
            return key + '=' + param[key];
        }).join("&") + "&key=" + config.wechat.pay.partnerKey;
        // console.log("sign:");
        // console.log(querystring);
        var hash = md5(querystring).toUpperCase();
        return hash
    },

}