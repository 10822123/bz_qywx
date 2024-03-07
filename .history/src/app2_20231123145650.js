const express = require('express')
const {jwtauth} = require('./middlewares/jwtauth');
const {server_port} = require('./config/base')
const app = express()
const port = 3001
// 导入并配置 cors 跨域中间件
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(jwtauth);




app.get('/login',  (req, res) => {
  res.json({ message: '成功访问资源' });
});







//捕捉错误信息
app.use(require('./middlewares/errorMiddleware'))


app.listen(port, () => {
  console.info(`Example app listening on port http://127.0.0.1:${port}`)
});