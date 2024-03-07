const express = require('express')
const {jwtauth,generateToken} = require('./middlewares/jwtauth');
const {server_port} = require('./config/base')
const app = express()
const port = 3001
// 导入并配置 cors 跨域中间件
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(jwtauth);





// 权限验证中间件
const checkPermission = (requiredPermission) => (req, res, next) => {
  // 解析 JWT 中的权限信息
  const userPermissions = req.user.permissions;

  // 检查用户是否具有访问权限
  if (userPermissions && userPermissions.includes(requiredPermission)) {
    next(); // 用户有权限，继续执行下一个中间件或路由处理程序
  } else {
    res.status(403).json({ error: '无权访问该资源' });
  }
};


app.get('/api/login',  (req, res) => {
  const user = {
    id: 1,
    username: 'user1',
    permissions: ['read', 'write', 'delete'],
  };

  const token = generateToken(user);

  res.json({ token });

});

app.get('/api/user',  (req, res) => {
  res.json({ message: '成功访问资源' });
});





//捕捉错误信息
app.use(require('./middlewares/errorMiddleware'))


app.listen(port, () => {
  console.info(`Example app listening on port http://127.0.0.1:${port}`)
});