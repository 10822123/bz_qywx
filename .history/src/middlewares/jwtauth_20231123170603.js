
// const jwt = require('jsonwebtoken');  
const { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');
const {SECRET_KEY,EXPIRATION_TIME,UNLESS_CONDITION} = require('../config/base');

function generateToken(user) {
    return jwt.sign(user, SECRET_KEY, { expiresIn: EXPIRATION_TIME });
  }
  
  function decodeToken(token) {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (err) {
      return null;
    }
  }

  
  function authMiddleware(req, res, next) {
    // 配置 express-jwt 中间件进行基本的 Token 验证
    const jwtMiddleware = expressjwt({
      secret: SECRET_KEY,
      algorithms: ['HS256'],
    }).unless(UNLESS_CONDITION);

    jwtMiddleware(req, res, (err) => {  
        console.log(token)
      if (err) {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
      
        if (token) {
          const decoded = decodeToken(token);
  
          if (decoded) {
            req.user = decoded;
  
            // 检查是否需要刷新 Token
            const currentTime = Math.floor(Date.now() / 1000);
            const expirationTime = decoded.exp;
  
            if (expirationTime - currentTime <= 300) {
              // 在 Token 过期前 5 分钟内需要更新 Token
              const refreshedToken = generateToken(decoded);
              res.setHeader('Authorization', 'Bearer ' + refreshedToken);
            }
  
            next();
          } else {
            res.status(401).json({ error: 'Invalid token' });
          }
        } else {
          res.status(401).json({ error: 'Missing token' });
        }
      } else {
        next();
      }
    });
  }

  
module.exports = { generateToken, decodeToken, authMiddleware };