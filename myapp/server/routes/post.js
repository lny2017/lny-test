import { getTimeTemp } from '../../untils/time';
import { query } from '../../untils/pool';
import sql from '../sql';

let { searchUser } = sql;

module.exports = function(req, res) {


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

    const timeTemp = getTimeTemp();

    const name = req.body.userName; // 请求的参数

    console.log(searchUser(name));

    query(searchUser(name)).then(r => {
        //do something
        console.log(r);

        // console.log(req);


        // 删除多余的返回值
        for (let i of r) {
            delete i.timestamp
        }

        const resObj = {
            code: 0,
            data: r,
            msg: "this is a post request",
            timeTemp
        };
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