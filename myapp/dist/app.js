'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = require('./router.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var rootDir = path.resolve(__dirname);
var projectDir = path.resolve(__dirname, '../', 'client');
app.use(express.static(rootDir));
app.use(express.static(projectDir));

app.use('/api', router);
app.get('/', function (req, res) {
    res.sendFile(projectDir + '/index.html');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({ code: 500, msg: "error" });
});

module.exports = app;