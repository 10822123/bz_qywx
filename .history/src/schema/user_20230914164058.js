
const { body, param, validationResult } = require('express-validator');  


exports.get_token = body({ 
    nickname: { isLength: { min: 3, max: 20 } }, 
    user_email: { isNumeric: true } 
  })

  
// 验证用户名  
exports.validateUsername = () => {  
  return body('username')  
    .isLength({ min: 3, max: 20 })  
    .withMessage('用户名长度必须在3到20个字符之间');  
};  
  
// 验证密码  
exports.validatePassword = () => {  
  return body('password')  
    .isLength({ min: 6, max: 20 })  
    .withMessage('密码长度必须在6到20个字符之间');  
};