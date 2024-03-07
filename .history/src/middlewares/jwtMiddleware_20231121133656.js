
// const jwt = require('jsonwebtoken');  
const { expressjwt: jwt } = require("express-jwt");

const {SECRET_KEY,EXPIRATION_TIME,UNLESS_CONDITION_PATH} = require('../config/base');


const jwtMiddleware = jwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'], // 您可以选择其他算法，如'RS256'  
}).unless({path:UNLESS_CONDITION_PATH})

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

module.exports = async (req, res, next) => {
    try {
        // 自动验证JWT令牌  
        await jwtMiddleware(req, res, next);
    } catch (error) {
       
        // 处理JWT验证错误  
        if (error.name === 'UnauthorizedError') {
            return res.status(401).send({ message: 'Invalid token' });
        }

        // 记录其他错误  
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
};


// 定义一个用于自动验证JWT的中间件  
const jwtAuth = (req, res, next) => {
    // 从请求头中获取Authorization字段的值  
    const authHeader = req.headers.authorization;

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

