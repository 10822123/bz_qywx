// 登录的处理函数
module.exports.login = async (req, res, next) => {
  res.send({
    code: 200,
    msg: "success",
    data: {
      token: "admin-accessToken-xxxxxx"
    }
  })
};

