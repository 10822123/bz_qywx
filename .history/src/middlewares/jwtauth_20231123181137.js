
// const jwt = require('jsonwebtoken');  
const { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');
const {SECRET_KEY,EXPIRATION_TIME,UNLESS_CONDITION} = require('../config/base');

function generateToken(user) {
    return jwt.sign(user, SECRET_KEY, { expiresIn: '10s' });
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
  
    jwtMiddleware(req, res, async (err) => {
      const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
      console.log(err.name);
      console.log(22);
      if (token) {
        const decoded = decodeToken(token);
        console.log(decoded);
  
        if (decoded) {
          req.user = decoded;
  
          // 检查是否需要刷新 Token
          const currentTime = Math.floor(Date.now() / 1000);
          const expirationTime = decoded.exp;
          console.log(expirationTime - currentTime);
  
          if (expirationTime - currentTime <= 300) {
            // 在 Token 过期前 5 分钟内需要更新 Token
            const refreshedToken = generateToken(decoded);
            console.log(refreshedToken);
            //res.setHeader('Authorization', 'Bearer ' + refreshedToken);
          }
        } else {
          res.status(401).json({ error: 'Invalid token' });
        }
      } else {
        next();
        res.status(401).json({ error: 'Missing token' });
      }
  
      // 执行下一个中间件
      next();
    });
  }
  
  
  
module.exports = { generateToken, decodeToken,deleteToken, authMiddleware };