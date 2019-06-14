var mysql = require("mysql");

// 创建连接池
var pool = mysql.createPool({
    host: 'localhost', // 数据库url
    port: '3306', // 端口
    user: 'root', // 数据库用户名
    password: '123456', // 密码
    database: 'test', // 数据库名字
});

var query = function(sql) {
    const p = new Promise((resolve, reject) => {
        pool.getConnection(function(err, conn) {
            if (err) {
                reject(err);
            } else {
                conn.query(sql, function(qerr, vals, fields) {
                    //释放连接
                    conn.release();
                    //事件驱动回调
                    if (qerr !== null) {
                        reject(qerr);
                    } else {
                        resolve(vals);
                    }
                });
            }
        });
    });

    return p;
};

module.exports = query;