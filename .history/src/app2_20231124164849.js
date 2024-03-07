const express = require('express')
const {generateToken, refreshMiddleware, authMiddleware,checkPermission} = require('./middlewares/authMiddleware');
const {server_port} = require('./config/base')
const app = express()
const port = 3001
// 导入并配置 cors 跨域中间件
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())




// 使用 authMiddleware 处理 Token 验证
app.use(authMiddleware);

// 使用 refreshMiddleware 处理 Token 刷新
app.use(refreshMiddleware);
app.use(checkPermission);



app.get('/api/login',  (req, res) => {
  const user = {
    userId: 'user555555',
    username: 'example_user',
  };
  const token = generateToken(user);

  res.json({ token });

});

app.get('/api/user',  (req, res) => {
  res.json({ message: 'Protected route, token required', user: req.user });

  
});

// 2. 部分路由不需要 token 的示例
app.get('/api/public', (req, res) => {
  res.json({ message: 'Public route, no token required' });
});



//捕捉错误信息
app.use(require('./middlewares/errorMiddleware'))


app.listen(port, () => {
  console.info(`Example app listening on port http://127.0.0.1:${port}`)
});