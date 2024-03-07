


// const account_phone = {
//     isNumeric: true,
//     isMobilePhone: { locale: 'zh_CN', strictMode: true }
// }

// const password = { isLength: { min: 6, max: 20 } }
const { body,check, param, validationResult } = require('express-validator');
const account_phone = body('username')
    .isEmail()
    .withMessage('手机号格式不正确');

const password = body('password')
    .isLength({ min: 6, max: 20 })
    .withMessage('密码长度必须在6到20个字符之间');



    const validate = require('../middlewares/validatorMiddleware')
    module.exports.register = validate([
        body('username').notEmpty().withMessage('用户名不能为空').bail()
            .isLength({min:3}).withMessage('用户名长度不能小于3').bail(),
        body('password').notEmpty().withMessage('邮箱不能为空').bail()
            .isEmail().withMessage('邮箱格式不正确').bail()
            .custom(async val=>{
                const emailValidate = await User.findOne({email: val})
                if(emailValidate){
                    return Promise.reject('邮箱已被注册')
                }
            }).bail()
    ])











// 导出一个函数来处理请求并返回响应   
exports.get_token = (req, res) => {  
    body('username')  
        .isEmail()  
        .withMessage('must be an email');  
  
        body('password')  
        .isLength({ min: 1 })  
        .withMessage('ust be at least 6 chars long');  
  
    var errors = validationResult(req);  
    console.log(errors)
    if (!errors.isEmpty()) {  
        return res.json({ errors: errors.mapped() });  
    }  
    res.json({ msg: 'success' }); 
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