
const { body, param, validationResult } = require('express-validator');

// const account_phone = {
//     isNumeric: true,
//     isMobilePhone: { locale: 'zh_CN', strictMode: true }
// }

// const password = { isLength: { min: 6, max: 20 } }

const account_phone = body('username')  
  .isNumeric()  
  .isMobilePhone('zh_CN', { strictMode: true })  
  .withMessage('手机号格式不正确');  
  
const password = body('password')  
  .isLength({ min: 6, max: 20 })  
  .withMessage('密码长度必须在6到20个字符之间');  
  
exports.get_token = body({  
  username: account_phone,  
  password: password  
});


// 验证用户名和密码  
exports.validateUser = () => {
    return [
        body('username')
            .isLength({ min: 3, max: 20 })
            .withMessage('用户名长度必须在3到20个字符之间'),
        body('password')
            .isLength({ min: 6, max: 20 })
            .withMessage('密码长度必须在6到20个字符之间')
    ];
};

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