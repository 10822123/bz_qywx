// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demo', 'root', '123456', {
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize.authenticate()
    .then(() => {
        console.log('数据库连接成功！');
    })
    .catch(err => {
        console.error('无法连接到数据库：', err.message);
        console.error('config:', config);  
    });

module.exports = sequelize;