import { query } from '../../untils/pool'; // 引入连接池
import sql from '../sql'; // 引入sql；
import { resFn } from '../../untils/baseRes'; // 引入基本的response方法
import { getTimeTemp } from '../../untils/time';

let { addUser } = sql;

module.exports = function (req, res) {

    const name = req.body.name; // 请求的参数 userName
    const password = req.body.password; // 请求的参数 userName
    const timestamp = getTimeTemp();


    console.log('我是sql：', addUser({ name, password, timestamp }));

    // 访问数据库读取数据
    query(addUser({ name, password, timestamp })).then(r => {
        //do something
        console.log('r:', r);

        // 设定返回参数并抛出res
        const resObj = resFn({ code: 0, data: { result: true }, msg: '添加成功' });

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