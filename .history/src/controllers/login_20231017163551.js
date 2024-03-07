// 登录的处理函数
module.exports.login = async(req, res, next) => {
  const { user } = require('../models/user');
    try {
      const users =  await user.findOne({
        where: {
          id: '10088'
        }
      });
      console.log(users)
      res.send(users)
    } catch (error) {
      console.error(error);
      console.error('数据验证错误信息:', error.errors);
      return next('Error finding user:', error);
    }
};

