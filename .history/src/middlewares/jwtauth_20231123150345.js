
// const jwt = require('jsonwebtoken');  
const { expressjwt: jwt } = require("express-jwt");

const {SECRET_KEY,EXPIRATION_TIME,UNLESS_CONDITION} = require('../config/base');




module.exports.jwtauth = jwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'], // 您可以选择其他算法，如'RS256'  
}).unless(UNLESS_CONDITION)


// 假设生成 JWT 时包含了用户的详细权限信息
module.exports.generateToken = (user) => {
    const secret = 'your-secret-key';
    const token = jwt.sign({ permissions: user.permissions }, secret, { expiresIn: '1h' });
    return token;
  };