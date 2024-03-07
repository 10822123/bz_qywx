const { Sequelize,Op , DataTypes } = require('sequelize');
const db = require('../utils/db')


// 定义数据表模型  
const router = db.define('router_api', {
  id: { 
    type: DataTypes.INTEGER, //属性的数据类型,对应的是列的数据类型
    primaryKey: true, //表示该属性对应的是表的主键列
    autoIncrement: true, //设置为自增
    field: 'id' //映射列名
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: () => 0,
    validate: {
      notNull: true,
      notEmpty: true
    }
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,    //表示该列不能接受空值    
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,    //表示该列不能接受空值
    unique: true,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  component: {
    type: DataTypes.STRING,
    allowNull: false,    //表示该列不能接受空值
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  hidden: {
    type: DataTypes.BOOLEAN,
    allowNull: false,    //表示该列不能接受空值
    unique: true,            //唯一约束确保该属性的值在整个表中是唯一的  
    validate: {
      notNull: {
        msg: '请确认是否隐藏'
      },
    },
    defaultValue: 0
  },
  levelHidden: {
    type: DataTypes.BOOLEAN,
    allowNull: false,    //表示该列不能接受空值
    unique: true,            //唯一约束确保该属性的值在整个表中是唯一的  
    validate: {
      notNull: {
        msg: '请确认是否隐藏一级路由'
      },
    },
    defaultValue: 0
  },
  icon: {
    type: DataTypes.STRING,
  },
  no_keepalive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,    //表示该列不能接受空值
    unique: true,            //唯一约束确保该属性的值在整个表中是唯一的  
    validate: {
      notNull: {
        msg: '请确认是否开启缓存'
      },
    },
    defaultValue: 0
  },
  badge: {
    type: DataTypes.STRING,
    allowNull: true,    //表示该列不能接受空值
    unique: true,            //唯一约束确保该属性的值在整个表中是唯一的  
    validate: {
    }
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

module.exports = { router,Op ,validationError: Sequelize.ValidationError };