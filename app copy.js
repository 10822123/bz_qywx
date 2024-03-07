const express = require('express')
const app = express()
//导入处理querystring的Nojs内置模块
const qs = require('querystring')

const port = 3000

const router = require('./router')


// 注意: 除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json())

// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encod
app.use(express.urlencoded({ extended: false }))

//全局中间件简化形式
app.use(function (req, res, next) {
  // 定义中间件具体的业务逻辑
  // 1.定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = !
    // 2.监听 req 的 data 事件
    req.on('data', (chunk) => {
      str += chunk
    })

  // 3.监听 reg 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    console.log(str)
    // TODO: 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)
    console.log(body)
  })
  next()
})


app.use(function (req, res, next) {
  //throw new Error('人为错误')
  console.log('我是中间件3')

  next()
})





//app.use() 函数的作用，就是注册全局中间件
//app.use('api/',router)  统一挂载api路由前缀  
app.use(router)


//定义错误中间件，捕获整个项目错误的异常错误，防止程序崩溃
app.use((err, req, res, next) => {
  console.log('发生了错误' + err.message)
  res.send('Error:' + err.message)
})


app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})