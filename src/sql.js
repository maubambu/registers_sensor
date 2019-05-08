
const mysql = require('mysql');


const mysqlpool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'monitor_rodolfo'
});


export default mysqlpool;