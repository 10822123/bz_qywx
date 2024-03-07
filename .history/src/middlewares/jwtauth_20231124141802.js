
// const jwt = require('jsonwebtoken');  
const { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY, EXPIRATION_TIME, UNLESS_CONDITION } = require('../config/base');


// 生成 Token
function generateToken(user) {
    'iat' in user ? (delete user.iat, delete user.exp) : '';
    return jwt.sign(user, SECRET_KEY, { expiresIn: '300s' });
}


// 获取 Token
function getToken(req) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    return token || null;
  }

// 解码 Token
function decodeToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
}

//删除token
function deleteToken(req, res, next) {
    // 设置 Authorization 为空字符串，而不是直接删除
    res.setHeader('Authorization', '');
    res.sendStatus(200);
}



// 配置 express-jwt 中间件进行基本的 Token 验证
const authMiddleware = expressjwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'],
    // requestProperty: 'user',// 指定存储用户信息的属性名
}).unless(UNLESS_CONDITION);


// 自动刷新 Token 中间件
function refreshMiddleware(req, res, next) {
    const token = getToken(req);

    if (token) {
        const decoded = decodeToken(token);

        if (decoded) {
            const currentTime = Math.floor(Date.now() / 1000);
            const expirationTime = decoded.exp;

            if (expirationTime - currentTime <= 300) {
                // 在 Token 过期前 5 分钟内需要更新 Token
                const refreshedToken = generateToken(decoded);
                // 将新 Token 传递给客户端
                res.setHeader('X-New-Token', refreshedToken);
            }
        }
    }
    next();
}


// 检查用户权限
function checkPermission (req, res, next) {

      const routePath = req.path;
      console.log(req.url)
      console.log(routePath.includes('/api/admin'))
      next()
      // 在这里添加逻辑，根据当前路由信息判断权限
    //   if (routePath.includes('/api/admin')) {
    //     // 如果是 /api/admin，允许访问
    //     next();
    //   } else if (routePath.includes('/api/editor')) {
    //     // 如果是 /api/editor，允许访问
    //     next();
    //   } else {
    //     next();
    //     // 其他情况拒绝访问
    //      res.status(403).json({ error: 'Forbidden' });
    //   }
  }
  
module.exports = { generateToken,getToken, decodeToken, deleteToken, authMiddleware,refreshMiddleware,checkPermission };