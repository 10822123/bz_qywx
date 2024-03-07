const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


// 定义数据表模型  
module.exports =  sequelize.define('router_api_group', {
  id: { 
    type: DataTypes.INTEGER, //属性的数据类型,对应的是列的数据类型
    primaryKey: true, //表示该属性对应的是表的主键列
    autoIncrement: true, //设置为自增
    field: 'id' //映射列名
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  notes: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      notNull: {
        msg: '请确认状态'
      },
    },
    defaultValue: 1
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  }
});
