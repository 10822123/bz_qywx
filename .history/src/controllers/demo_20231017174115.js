// 登录的处理函数
module.exports.login = (req, res, next) => {
    res.send({
      code: 200,
      msg: "success",
      data: {
        token: "admin-accessToken-xxxxxx"
      }
    })
  };
  
  
  module.exports.userinfo =  (req, res, next) => {
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