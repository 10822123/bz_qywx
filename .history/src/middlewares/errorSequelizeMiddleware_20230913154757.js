const Sequelize = require('sequelize');  

const errorSequelizeMiddleware = function (err, req, res, next) {  
  console.log('9999999999999999999999999')
  // if (error instanceof validationError) {
  //   // console.log(error)
  //   console.error('Validation error msg:', error.errors.map(err => err.message));
  //   // console.error('Validation error code:', error.parent.code);
  //   // console.error('Validation error errno:', error.parent.errno);
  //   res.status(500).json({
  //     'Validation error msg:': error.errors.map(err => err.message),
  //     // 'Validation error code:': error.parent.code,
  //     // 'Validation error errno:': error.parent.errno
  //   });
  // } else {
  //   console.error('Error creating user:', error);
  // }
  next()
}  
  
module.exports = errorSequelizeMiddleware;