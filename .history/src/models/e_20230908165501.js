const Sequelize = require('sequelize');
//导入配置文件

const db = require(ROOT_DIR+'/utils/db')
const Employee = db.define('db_employee',{
    id:{  //属性名可以和列名相同,也可以不同
        type: Sequelize.INTEGER, //属性的数据类型,对应的是列的数据类型
        primaryKey: true, //表示该属性对应的是表的主键列
        autoIncrement: true, //设置为自增
        field: 'empid' //映射列名
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: false, //表示不允许为空
        field: 'empname'
    },
    gender: {
        type: Sequelize.STRING(4),
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING(13),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
},{
    freezeTableName: true, //映射表名的设置：true表示使用用户给定的表名,false表示MySQL自动生成表名(为类名后加s)
    timestamps: false //是否自动生成时间戳列(createAt列、updateAt列),false表示不生成
});

module.exports = Employee;
