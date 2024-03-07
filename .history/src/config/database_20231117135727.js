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
  
  define: {
    underscored: false,
    freezeTableName: true, //映射表名的设置：true表示使用用户给定的表名,false表示MySQL自动生成表名(为类名后加s)
    timestamps: true, //是否自动生成时间戳列(createAt列、updateAt列),false表示不生成
    updatedAt: true,
    createdAt: true,
    paranoid: true // 启用软删除  
    //paranoid: true 选项启用了软删除功能。当你调用 destroy 方法删除一个实例时，Sequelize 不会真正删除数据库中的记录，
    //而是将 deletedAt 字段设置为当前时间。同时，查询时默认会排除已软删除的记录。
    // 你可以使用 restore 方法来恢复已软删除的记录，该方法会将 deletedAt 字段设置为 null。
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
