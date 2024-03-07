
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


// 导出一个函数来处理请求并返回响应   
exports.get_token = (req, res) => {  
    // 使用 body 函数来验证请求体中的参数  
    const validation = body({ phone: account_phone, password: password });   
    const errors = validationResult(req);  
    if (!errors.isEmpty()) {  
        return res.status(400).json({ errors: errors.array() });  
    }  
    // 这里你可能需要返回一些实际的响应，而不是只是验证结果  
    return res.json({ message: '验证成功' });  
};

exports.get_token2 = body({
    username: account_phone,
    password: password
});

// 定义一个函数来处理验证结果并返回响应  
const handleValidationResult = (req, res) => {
    console.log(333)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
};



// // 验证用户名和密码
// exports.validateUser = () => {
//     return [
//         body('username')
//             .isLength({ min: 3, max: 20 })
//             .withMessage('用户名长度必须在3到20个字符之间'),
//         body('password')
//             .isLength({ min: 6, max: 20 })
//             .withMessage('密码长度必须在6到20个字符之间')
//     ];
// };

// // 验证用户名
// exports.validateUsername = () => {
//     return body('username')
//         .isLength({ min: 3, max: 20 })
//         .withMessage('用户名长度必须在3到20个字符之间');
// };

// // 验证密码
// exports.validatePassword = () => {
//     return body('password')
//         .isLength({ min: 6, max: 20 })
//         .withMessage('密码长度必须在6到20个字符之间');
// };