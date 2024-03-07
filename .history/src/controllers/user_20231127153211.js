// controllers/user.js
module.exports = {
  login: (req, res, next) => {
    res.send({
      code: 200,
      msg: "success",
      data: {
        token: "admin-accessToken-xxxxxx"
      }
    });
  }
};
