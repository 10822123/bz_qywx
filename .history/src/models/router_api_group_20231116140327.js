const { Sequelize,Op , DataTypes } = require('sequelize');
const db = require('../utils/sequelize')


// 定义数据表模型  
const router_api_group = db.define('router_api_group', {
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
}, {
  freezeTableName: true, //映射表名的设置：true表示使用用户给定的表名,false表示MySQL自动生成表名(为类名后加s)
  timestamps: true, //是否自动生成时间戳列(createAt列、updateAt列),false表示不生成
  updatedAt: true,
  createdAt: true,
  paranoid: true // 启用软删除  
  //paranoid: true 选项启用了软删除功能。当你调用 destroy 方法删除一个实例时，Sequelize 不会真正删除数据库中的记录，
  //而是将 deletedAt 字段设置为当前时间。同时，查询时默认会排除已软删除的记录。
  // 你可以使用 restore 方法来恢复已软删除的记录，该方法会将 deletedAt 字段设置为 null。
});

module.exports = { router_api_group,Op ,validationError: Sequelize.ValidationError };