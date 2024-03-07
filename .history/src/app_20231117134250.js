const express = require('express')
const jwtMiddleware = require('./middlewares/jwtMiddleware');
const config = require('./config/config')
const router = require('./router/index')
const logger = require('./utils/logger'); // 引入日志记录器模块 
const { expressjwt: jwt } = require("express-jwt");
const {sequelize} = require('./models');
const app = express()
const port = config.server_port
// 导入并配置 cors 跨域中间件
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(jwtMiddleware);


sequelize.sync()
  .then(() => {
    console.log('66666666Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });


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

app.listen(port, () => {
  logger.info(`Example app listening on port http://127.0.0.1:${config.server_port}`)
})