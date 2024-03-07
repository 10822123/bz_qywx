//导入express
const express = require('express')
//创建路由对象
const router= express.Router()
//挂载路由
router.get('/user/list',(req,res)=>{
    res.send('get user list 22')
})

router.post('/user/list',(req,res)=>{
    res.send('post user list')
})

module.exports = router