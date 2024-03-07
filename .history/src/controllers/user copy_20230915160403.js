// 登录的处理函数
module.exports.login = (req, res) => {
  const { user } = require('../models/user');

  user.findAll({
    //   where: { id: 1 }
    //raw: false //不显示时间戳列
  }).then((results) => {
    //    console.log(results)
    res.send(results);
  }).catch((error) => {
    // 处理错误  
    console.error(error);
    console.error('数据验证错误信息:', error.errors);
    res.status(500).send('Server error');
  });

  //  res.send('login OK')
}


//验证token
module.exports.verify_token =  (req, res, next) => {
  const auth = require('../middlewares/authMiddleware');
  const str = auth.verifyToken('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjE4ODAyMDAwMDIxIiwidXVpZCI6IjBjNGUyMzdmLTFmOWEtNDBlYi05ZTA0LWVlYmMzM2Y4MTYyNiIsImlhdCI6MTY5NDc2NDMwOSwiZXhwIjoxNjk0ODUwNzA5fQ.xKYFNnKzXX1_f2dBOSvKneiJ_UP5rPRrRowVbDJi9_c');
  console.log(str)
  res.send(str);
}

// 获取token
module.exports.get_token = (req, res, next) => {
  const { user } = require('../models/user');
  (async () => {
    try {  
      const userstr = await user.findOne({  
        where: {  
          account_phone: req.query.username,  
          password: req.query.password,  
        },
      });  
      if (userstr) {         
        const auth = require('../middlewares/authMiddleware');
        const tokenStr = auth.createToken({ username: userstr.account_phone,uuid: userstr.uuid})
        res.send({
          status: 200,
          message: '登录成功！',
          token: tokenStr, // 要发送给客户端的 token 字符串
        })              
      } else {  
        res.status(404).json({ message: '用户不存在或密码错误' });  
      }  
    } catch (error) {  
      next(error)
    } 
  })();

}




// 登录的处理函数
module.exports.register = (req, res, next) => {
  const { user } = require('../models/user');
  console.log(req.query)
  const { account_phone, password } = req.query;
  (async () => {
    try {
      const userss = await user.create({ account_phone: account_phone, password: password,logging: console.log });
      console.log('User created successfully:', user);
      res.send('register OK')
    } catch (error) {
      next(error)
    }
  })();
}
