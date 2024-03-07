// auth.js  
  
const jwt = require('jsonwebtoken');  
const expressJwt = require('express-jwt');  
  
// 设置全局的密钥、过期时间和unless条件  
const SECRET_KEY = 'your-secret-key';  
const EXPIRATION_TIME = '1d'; // 1 天  
const UNLESS_CONDITION = 'your-unless-condition'; // 除非条件，例如：除非用户已登录  
  
// 生成 JWT  
function generateToken(payload, unlessCondition = UNLESS_CONDITION) {  
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRATION_TIME, unless: unlessCondition });  
}  
  
// 验证 JWT 并挂载到 req.user 属性上  
function verifyToken(req, res, next) {  
  const token = req.headers['x-access-token'] || req.query.token || req.body.token || req.cookies.token;  
  if (token) {  
    jwt.verify(token, SECRET_KEY, { unless: UNLESS_CONDITION }, (err, decoded) => {  
      if (err) {  
        return res.status(401).send({ auth: false, message: 'Token expired or invalid' });  
      }  
      req.user = decoded;  
      next();  
    });  
  } else {  
    return res.status(401).send({ auth: false, message: 'No token provided' });  
  }  
}  
  
// 创建一个中间件，用于在应用程序中使用 express-jwt 进行身份验证  
function createAuthMiddleware(secretKey, unlessCondition) {  
    const authMiddleware = expressJwt({  
      secret: secretKey,  
      algorithms: ['HS256'],  
      unless: unlessCondition,  
    });  
    
    return authMiddleware;  
  }
  
module.exports = { generateToken, verifyToken, authMiddleware };