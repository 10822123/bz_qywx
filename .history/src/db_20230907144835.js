const mysql = require('mysql')
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'demo'
})
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