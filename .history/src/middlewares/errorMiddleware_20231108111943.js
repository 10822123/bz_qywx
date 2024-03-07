const Sequelize = require('sequelize');
const errorMiddleware = function (err, req, res, next) {
  if (err instanceof Sequelize.ValidationError) {
    console.error('Validation error msg:', err.errors.map(err => err.message));
    // 处理验证错误  
    res.status(400).send({status:400, message: err.message, errors: err.errors.map(err => err.message) });

  } else if (err instanceof Sequelize.DatabaseError) {
    // 处理数据库错误  
    res.status(500).send({ status:500,message: 'Database error', error: err.message });
  } else if (err.name === 'UnauthorizedError') {
    res.status(401).send({status:401,message:'Invalid token'});
  //}else if(){
  } else {
    console.log('err',err)
    // 处理其他错误  
    console.log('err.name:'+err.name)
    console.log('发生了错误：' + err.message);
    res.status(500).send({ message: 'Internal server error', error: err.message });
  }


};

module.exports = errorMiddleware;