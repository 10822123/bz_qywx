
// const jwt = require('jsonwebtoken');  
const { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY, EXPIRATION_TIME, UNLESS_CONDITION } = require('../config/base');

function generateToken(user) {
    'iat' in user ? (delete user.iat, delete user.exp) : '';
    return jwt.sign(user, SECRET_KEY, { expiresIn: '60s' });
}

function decodeToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
}
//删除token
function deleteToken(req, res, next) {
    res.removeHeader('Authorization'); // 移除响应头中的 Token
    res.sendStatus(200);
}



function authMiddleware(req, res, next) {
    // 配置 express-jwt 中间件进行基本的 Token 验证
    const jwtMiddleware = expressjwt({
        secret: SECRET_KEY,
        algorithms: ['HS256'],
    }).unless(UNLESS_CONDITION);
}



module.exports = { generateToken, decodeToken, deleteToken, authMiddleware };