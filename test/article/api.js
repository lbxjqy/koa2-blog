/*
 * @Author: your name
 * @Date: 2020-05-20 01:11:41
 * @LastEditTime: 2020-05-20 01:39:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg/Users/linboxuan/vscodeProjects/koa2-blog/test/article/api.js
 */

var request = require("supertest");


describe('GET /user', function(){
    it('respond with json', function(done){
      request('http://localhost:3000')
        .get('/api/article/homePageHotList')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err){
            done(err);
          }
          console.log(res.body)
        //   res.body.name.should.be.eql('jerryc');
          done();
        })
    });
  });