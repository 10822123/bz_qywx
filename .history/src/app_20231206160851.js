const express = require('express')
const {generateToken, refreshMiddleware, authMiddleware,checkPermission} = require('./middlewares/authMiddleware');
const {server_port} = require('./config/base')
const router = require('./router'); // 引入 router/index.js
const logger = require('./utils/logger'); // 引入日志记录器模块 
const {sequelize} = require('./models');
const app = express()

app.use(express.static('public'));
const port = server_port
// 导入并配置 cors 跨域中间件
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// 使用 authMiddleware 处理 Token 验证
// app.use(authMiddleware);

// // 使用 refreshMiddleware 处理 Token 刷新
// app.use(refreshMiddleware);






app.get(
  "/protected",
  function (req, res) {
    if (!req.auth.admin) return res.sendStatus(401);
    res.sendStatus(200);
  }
);

app.use(router)

// app.use((req, res, next) => {  
//   if (!req.user) {  
//     return res.status(401).send({ auth: false, message: 'Token not valid.' });  
//   }  
//   next();  
// });


//捕捉错误信息
app.use(require('./middlewares/errorMiddleware'))


// 最后同步数据库
sequelize.sync({ force: true })
  .then(() => {
    console.log('数据库同步成功');
    // 在这里启动服务器
    app.listen(port, () => {
      logger.info(`Example app listening on port http://127.0.0.1:${server_port}`)
    });
  })
  .catch((error) => {
    console.error('数据库同步错误:', error);
  });
