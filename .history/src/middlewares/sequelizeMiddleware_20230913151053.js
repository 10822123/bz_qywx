const Sequelize = require('sequelize');  
  
const sequelizeMiddleware = function (err, req, res, next) {  
  if (err instanceof Sequelize.ValidationError) {  
    // 处理验证错误  
    res.status(400).send({ message: err.message, errors: err.errors });  
  } else if (err instanceof Sequelize.DatabaseError) {  
    // 处理数据库错误  
    res.status(500).send({ message: 'Database error', error: err.message });  
  } else {  
    // 处理其他错误  
    res.status(500).send({ message: 'Internal server error', error: err.message });  
  }  
}  
  
module.exports = sequelizeMiddleware;