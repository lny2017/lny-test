import { getTimeTemp } from '../../untils/time';
import { query } from '../../untils/pool';
import sql from '../sql';

let getUser = sql.getUser();

module.exports = function(req, res) {
    console.log(req.query.userName);

    const timeTemp = getTimeTemp();

    query(getUser).then(r => {
        //do something
        console.log(r);

        // 删除多余的返回值
        for (let i of r) {
            delete i.timestamp
        }

        const resObj = {
            code: 0,
            data: r,
            msg: "this is a get request",
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