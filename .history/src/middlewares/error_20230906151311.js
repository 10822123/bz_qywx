
module.exports = (err, req, res, next) => {
    console.log('发生了错误' + err.message)
    res.send('Error:' + err.message)
  }