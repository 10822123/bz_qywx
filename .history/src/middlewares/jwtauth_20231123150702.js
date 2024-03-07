
// const jwt = require('jsonwebtoken');  
const jwt = require('express-jwt');

const {SECRET_KEY,EXPIRATION_TIME,UNLESS_CONDITION} = require('../config/base');




module.exports.jwtauth = jwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'], // 您可以选择其他算法，如'RS256'  
}).unless(UNLESS_CONDITION)


// 假设生成 JWT 时包含了用户的详细权限信息
module.exports.generateToken = (user) => {
    const token = jwt.sign({ permissions: user.permissions }, SECRET_KEY, { expiresIn: '1h' });
    return token;
  };

  // 权限验证中间件
  module.exports.checkPermission = (requiredPermission) => (req, res, next) => {
    // 解析 JWT 中的权限信息
    const userPermissions = req.user.permissions;
  
    // 检查用户是否具有访问权限
    if (userPermissions && userPermissions.includes(requiredPermission)) {
      next(); // 用户有权限，继续执行下一个中间件或路由处理程序
    } else {
      res.status(403).json({ error: '无权访问该资源' });
    }
  };