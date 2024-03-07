const mysql = require('mysql');
const { db_host, db_user, db_password, db_database } = require('../config/config');

// 创建数据库连接  
const connection = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database
});

// 连接数据库  
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// 封装查询方法  
function query(sql, params) {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

// 导出一个包含封装的查询方法的对象  
module.exports = { query };