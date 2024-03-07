const { body, check, param, validationResult } = require('express-validator');
const validate = require('../middlewares/validatorMiddleware')



const account_phone = body('username').isNumeric().isLength({ min: 11, max: 11 }).withMessage('手机号格式不正确').bail();

const password = body('password').isLength({ min: 6, max: 20 }).withMessage('密码长度必须在6到20个字符之间').bail();




module.exports = get_token => {
    validate([
        account_phone, password
    ])
}

