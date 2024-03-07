// 登录的处理函数
exports.login = (req, res) => {
    res.send('login OK')
    const db = require(ROOT_DIR+'/utils/db')
    db.query('select * from user',(err,results)=>{
        if(err) return console.log(err.message)
        console.log(results)
    })
    
    const sqlstr = 'insert into user (name,password) values (?,?)'
    db.query(sqlstr,['张三','123456'],(err,results)=>{
        if(err) return console.log(err.message)
    
        if(results.affectedRows ===1){
            console.log(插入成功)
        }
        console.log(results)
    })
    db.query('select * from user',(err,results)=>{
        if(err) return console.log(err.message)
        console.log(results)
    })

}
