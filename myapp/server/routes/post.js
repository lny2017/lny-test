var timeObj = require('../../untils/time');

module.exports = function(req, res) {
    console.log(req.body.userName);
    console.log(req.body.password);

    console.log(req);
    const timeTemp = timeObj.getTimeTemp();

    const userName = req.body.userName; // 请求的参数
    const password = req.body.password;


    const resObj = {
        code: 200,
        data: {
            userName,
            password
        },
        msg: "this is a post request",
        timeTemp
    };
    res.json(resObj);
}