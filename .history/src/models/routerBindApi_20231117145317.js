const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// 定义数据表模型  
module.exports  = sequelize.define('router_bind_api', {
  id: { 
    type: DataTypes.INTEGER, //属性的数据类型,对应的是列的数据类型
    primaryKey: true, //表示该属性对应的是表的主键列
    autoIncrement: true, //设置为自增
    field: 'id' //映射列名
  },
  router_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  api_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  }
});
