'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var mysql = require('mysql');

var mysqlpool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'monitor_rodolfo'
});

exports.default = mysqlpool;