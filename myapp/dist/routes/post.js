'use strict';

var timeObj = require('../../untils/time');
// var mysql = require('mysql');
var query = require("../../untils/pool");

module.exports = function (req, res) {

    // 直接连接数据库
    // var connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '123456'
    // });
    // connection.connect();
    // connection.query('use test');
    // var strQuery = 'select * from table_user';

    // connection.query(strQuery, function(err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         console.log(rows);
    //     }
    // });

    // 借用连接池
    // var pool = mysql.createPool({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '123456',
    //     database: 'test'
    // });

    // pool.getConnection(function(err, connection) {
    //     connection.query('select * from table_user', function(err, rows) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             console.log(rows);
    //         }
    //     });

    //     connection.release();

    // });

    query('select * from table_user').then(function (res) {
        //do something
        console.log(res);
    }).catch(function (err) {
        console.log(err);
    });

    console.log(req.body.userName);
    console.log(req.body.password);

    // console.log(req);
    var timeTemp = timeObj.getTimeTemp();

    var userName = req.body.userName; // 请求的参数
    var password = req.body.password;

    var resObj = {
        code: 200,
        data: {
            userName: userName,
            password: password
        },
        msg: "this is a post request",
        timeTemp: timeTemp
    };
    res.json(resObj);
};