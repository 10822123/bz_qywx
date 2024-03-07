// 导入定义验证规则的包
const joi = require('joi');


// 定义用户名和密码的验证规则
const username = joi.string().regex(/^1[34578]\d{9}$/).min(11).max(11).required()
const password = joi.string().min(6).max(11).required()

// 定义 id, nickname, email 的验证规则
// const id = joi.number().integer().min(1).required()
// const nickname = joi.string().required()
// const user_email = joi.string().email().required()

// 定义验证 avatar 头像的验证规则
// const avatar = joi.string().dataUri().required()

// 定义验证注册和登录表单数据的规则对象
exports.get_token_schema = {
    username,
    password,
}

// // 验证规则对象 - 更新用户基本信息
// exports.update_userinfo_schema = {
//   // 需要对 req.body 里面的数据进行验证
//   body: {
//     id,
//     nickname,
//     email: user_email,
//   },
// }

// // 验证规则对象 - 更新密码
// exports.update_password_schema = {
//   body: {
//     oldPwd: password,
//     newPwd: joi.not(joi.ref('oldPwd')).concat(password),
//   },
// }

// // 验证规则对象 - 更新头像
// exports.update_avatar_schema = {
//   body: {
//     avatar
//   }
// }
