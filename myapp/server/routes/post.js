import { query } from '../../untils/pool'; // 引入连接池
import sql from '../sql'; // 引入sql；
import { resFn } from '../../untils/baseRes'; // 引入基本的response方法

let { searchUser } = sql;

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


    const userName = req.body.userName; // 请求的参数 userName

    console.log('我是sql：', searchUser(userName));

    // 访问数据库读取数据
    query(searchUser(userName)).then(r => {
        //do something
        console.log('r:', r);

        // 删除多余的返回值
        for (let i of r) {
            delete i.timestamp
        }

        // 设定返回参数并抛出res
        const resObj = resFn({ code: 0, data: r, msg: 'this is a post request!' });
        
        res.json(resObj);

    }).catch(err => {
        console.log(err);
        res.json({
            code: 3,
            msg: '接口异常',
            timeTemp
        });
    });


}