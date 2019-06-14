"use strict";

var timeObj = require('../../untils/time');

module.exports = function (req, res) {
    console.log(req.query.userName);
    var timeTemp = timeObj.getTimeTemp();

    var resObj = {
        code: 200,
        data: {},
        msg: "this is a get request",
        timeTemp: timeTemp
    };
    res.json(resObj);
};