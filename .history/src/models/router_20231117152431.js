const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { router_api,router_bind_api } = require('./models');
// 定义数据表模型  
const router =  sequelize.define('router', {
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
  api_id: {
    type: DataTypes.STRING,
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
});


router.belongsToMany(router_api, { through: router_bind_api, foreignKey: 'router_id' });
router_api.belongsToMany(router, { through: router_bind_api, foreignKey: 'api_id' });

module.exports = router