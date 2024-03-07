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