// controllers/user.js
module.exports.login = (req, res, next) => {
  res.send({
    code: 200,
    msg: "success",
    data: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyNTU1NTU1IiwidXNlcm5hbWUiOiJleGFtcGxlX3VzZXIiLCJpYXQiOjE3MDEwNzM3ODAsImV4cCI6MTcwMTE2MDE4MH0.e0iDEjbi4wc5NJTMXx1XatsQwAiuZxSvXXXdhQxJzns"
    }
  });
};


module.exports.info =  (req, res, next) => {
  res.send({
    code: 200,
    msg: "success",
    data: {
      username: "admin",
      roles: ["Admin"],
      permissions: ["read:system", "write:system", "delete:system"],
      avatar: "https://i.gtimg.cn/club/item/face/img/2/16022_100.gif"
    }
  })
};


module.exports.logout =  (req, res, next) => {
  res.send({
    code: 200,
    msg: "success"
  })
};      return {
        code: 200,
        msg: 'success',
      }


//验证token
module.exports.verify_token22 = (req, res, next) => {
  const auth = require('../middlewares/authMiddleware');
  console.log(req.user)
  auth.verifyToken()
  res.send('str');
}

//验证token
module.exports.get_user = (req, res, next) => {
  //const auth = require('../middlewares/authMiddleware');
  console.log(req.auth)
  res.send(req.user); // 发送请求中的 JWT 信息
}

module.exports.get_token2 = (req, res, next) => {
  console.log(req.auth)
  const auth = require('../middlewares/authMiddleware');
  const tokenStr = auth.createToken({ username: '10822123', uuid: '2sdfsadfsadf' })
  res.send({
    status: 200,
    message: '登录成功！',
    token: tokenStr, // 要发送给客户端的 token 字符串
  })
}


// 获取token
module.exports.get_token = async (req, res, next) => {
  const { user } = require('../models');
  try {
    const userstr = await user.findOne({
      where: {
        account_phone: req.query.username,
        password: req.query.password,
      },
    });
    console.log(req.query)
    console.log(userstr)
    if (userstr) {
      const auth = require('../middlewares/authMiddleware');
      const tokenStr = auth.createToken({ username: userstr.account_phone, uuid: userstr.uuid })
      res.send({
        status: 200,
        message: '登录成功！',
        token: tokenStr, // 要发送给客户端的 token 字符串
        data: userstr
      })
    } else {
      res.status(404).json({ message: '用户不存在或密码错误' });
    }
  } catch (error) {
    next(error)
  }

}


// 登录的处理函数
module.exports.register = (req, res, next) => {
  const { user } = require('../models');
  console.log(req.query)
  const { account_phone, password } = req.query;
  (async () => {
    try {
      const userss = await user.create({ account_phone: account_phone, password: password, logging: console.log });
      console.log('User created successfully:', user);
      res.send('register OK')
    } catch (error) {
      next(error)
    }
  })();
}
