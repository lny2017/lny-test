var timeObj = require('../../untils/time');

module.exports = function(req, res) {
    console.log(req.query.userName);
    const timeTemp = timeObj.getTimeTemp();

    const resObj = {
        code: 200,
        data: {},
        msg: "this is a get request",
        timeTemp
    };
    res.json(resObj);
}