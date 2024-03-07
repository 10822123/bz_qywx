
// const jwt = require('jsonwebtoken');  
const { expressjwt: jwt } = require("express-jwt");

const {SECRET_KEY,EXPIRATION_TIME,UNLESS_CONDITION} = require('../config/base');




// 创建JWT令牌  
const createToken = (user) => {
    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: EXPIRATION_TIME });
    return token;
};

// 解密JWT令牌  
const decryptToken = (token) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
};


module.exports.jwtauth = jwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'], // 您可以选择其他算法，如'RS256'  
}).unless(UNLESS_CONDITION)


// 定义一个用于自动验证JWT的中间件  
const jwtAuth11 = (req, res, next) => {
    // 从请求头中获取Authorization字段的值  
    const authHeader = req.headers.authorization;
    console.log(888888,authHeader)
    // 从Authorization字段中解析JWT令牌  
    const token = authHeader && authHeader.split(' ')[1];

    // 解密令牌并进行验证  
    if (token) {
        const decoded = decryptToken(token);
        if (decoded) {
            // 如果令牌验证成功，将解码后的用户信息存储到req.user中，并继续执行下一个中间件或路由处理程序  
            req.user = decoded;
            next();
        } else {
            // 如果令牌验证失败，返回401状态码  
            return res.status(401).send({ message: 'Invalid token3333' });
        }
    } else {
        // 如果令牌不存在，返回401状态码  
        return res.status(401).send({ message: 'Token not found' });
    }
};

