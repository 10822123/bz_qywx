const express = require('express');  
const jwt = require('jsonwebtoken');  
const expressJwt = require('express-jwt');  
  
const app = express();  
  
// 设置JWT密钥和公钥  
const secretKey = 'your-secret-key';  
const publicKey = 'your-public-key';  
  
// 使用Express-jwt中间件来验证JWT  
app.use(expressJwt({ secret: secretKey }).unless({ path: ['/optional-path'] }));  
  
// 定义路由处理程序  
app.get('/protected', function(req, res) {  
  // 在此路由中，您可以使用 req.user 来访问解码后的JWT数据  
  res.send('This route is protected. Hello, ' + req.user.username + '!');  
});  
  
// 启动应用程序  
app.listen(3000, function() {  
  console.log('Server is running on port 3000');  
});