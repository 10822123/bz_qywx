const { Sequelize, DataTypes } = require('sequelize');  
  
const sequelize = new Sequelize('demo', 'root', '123456', {  
  host: 'localhost',  
  dialect: 'mysql'  
});  
  
const User = sequelize.define('user', {  
  username: {  
    type: DataTypes.STRING,  
    allowNull: false,  
    validate: {  
      notEmpty: true, // 添加这个验证规则，要求字段不为空  
      len: [2, 50] // 验证字段长度在2到50个字符之间  
    }  
  },  
  // 其他字段定义...  
});  
  
const createUser = async (data) => {  
  try {  
    const user = await User.create(data);  
    console.log('User created successfully:', user);  
  } catch (error) {  
    if (error instanceof Sequelize.ValidationError) {  
      console.error('Validation error:', error.message);  
    } else {  
      console.error('Error creating user:', error);  
    }  
  }  
};  
  
// 使用示例数据创建用户  
createUser({ username: '', /* 其他字段数据... */ });