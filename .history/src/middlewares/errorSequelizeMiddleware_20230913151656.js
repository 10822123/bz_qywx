import { ValidationError, DatabaseError } from 'sequelize';  
  
const errorSequelizeMiddleware = function (err, req, res, next) {  
    console.log(err)
  if (err instanceof ValidationError) {  
    // 处理验证错误  
    res.status(400).send({ message: err.message, errors: err.errors });  
  } else if (err instanceof DatabaseError) {  
    // 处理数据库错误  
    res.status(500).send({ message: 'Database error', error: err.message });  
  } else {  
    // 处理其他错误  
    res.status(500).send({ message: 'Internal server error', error: err.message });  
  }  
}  
  
export default errorSequelizeMiddleware;