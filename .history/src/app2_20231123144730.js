const express = require('express')
const jwtMiddleware = require('./middlewares/jwtauth');
const {server_port} = require('./config/base')
const router = require('./router'); // 引入 router/index.js
const logger = require('./utils/logger'); // 引入日志记录器模块 
const {sequelize} = require('./models');
const app = express()
const port = server_port
// 导入并配置 cors 跨域中间件
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(jwtMiddleware);





app.get(
  "/protected",
  function (req, res) {
    if (!req.auth.admin) return res.sendStatus(401);
    res.sendStatus(200);
  }
);

app.use(router)



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
