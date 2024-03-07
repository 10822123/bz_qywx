const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const { v4: uuidv4 } = require('uuid');


// 定义数据表模型  
const user = sequelize.define('user', {
  id: {  //属性名可以和列名相同,也可以不同
    type: DataTypes.INTEGER, //属性的数据类型,对应的是列的数据类型
    primaryKey: true, //表示该属性对应的是表的主键列
    autoIncrement: true, //设置为自增
    field: 'id' //映射列名
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,  
    unique: true,             //唯一约束确保该属性的值在整个表中是唯一的  
    defaultValue: () => uuidv4(),
  },
  account_phone: {
    type: DataTypes.STRING,  
    allowNull: false,    //表示该列不能接受空值
    unique: true,            //唯一约束确保该属性的值在整个表中是唯一的  
    validate: {
      isNumeric: true,     //验证属性值是否只包含数字字符。
      len: [11, 11],     // 根据您的手机号码位数进行更改  
      notNull: {
        msg: '请输入你的手机号码'
      }
    }
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'normal'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,  
    validate: {  
      len: [6], // 密码长度不能少于5个字符  
    },
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  }
}, {
  tableName: 'user', // 设置表名
});

module.exports = user