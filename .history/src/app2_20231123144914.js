const express = require('express')
const jwtMiddleware = require('./middlewares/jwtauth');
const {server_port} = require('./config/base')
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



//捕捉错误信息
app.use(require('./middlewares/errorMiddleware'))


app.listen(port, () => {
  logger.info(`Example app listening on port http://127.0.0.1:${server_port}`)
});