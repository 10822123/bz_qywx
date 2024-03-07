//导入sequelize模块
const { Sequelize } = require('sequelize');
const mysql = require('mysql2');
const { db_host, db_user, db_password, db_database } = require('../config/config');

const config = {
    host: db_host,
    database: db_database,
    username: db_user,
    password: db_password,
    dialect: 'mysql',
    pool: {
        max: 5,//连接池中最大连接数量
        min: 0,//连接池中最小连接数量
        acquire: 30000,
        idle: 10000 //若某个线程10秒没有使用，就释放
    },
    debug: true,  //显示调试信息
    logging: console.log,
    timezone: '+08:00'
};

const sequelize = new Sequelize(config);

sequelize.authenticate()
    .then(() => {
        console.log('数据库连接成功！');
    })
    .catch(err => {
        console.error('无法连接到数据库：', err.message);
        console.error('config:', config);  
    });

    module.exports = {
        sequelize, 
        Sequelize, 
        Op,
        DataTypes 
    }




