const SECRET_KEY = 'your-secret-key';
const UNLESS_CONDITION = {
  path: []
}; // 除非条件，例如：除非用户已登录  



function authMiddleware(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (token) {
    jwt.verify(token, SECRET_KEY, { unless: UNLESS_CONDITION }, (err, decoded) => {
      if (err) {
        // Token 验证失败
        // 可以在这里处理无效 Token 的逻辑
        return res.status(401).json({ error: 'Invalid token' });
      } else {
        // Token 验证成功，检查是否需要更新 Token
        const currentTime = Math.floor(Date.now() / 1000);
        const expirationTime = decoded.exp;

        req.user = decoded;
        if (expirationTime - currentTime <= 300) {
          // 在 Token 过期前5分钟内需要更新 Token
          const refreshedToken = jwt.sign({ userId: decoded.userId }, secretKey, { expiresIn: '1h' });
          res.setHeader('Authorization', 'Bearer ' + refreshedToken);
        }
      }
    });
  }
  next();
}