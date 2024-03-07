
// const jwt = require('jsonwebtoken');  
const { expressjwt: jwt } = require("express-jwt");

// 设置全局的密钥、过期时间和 unless 条件  
const SECRET_KEY = 'your-secret-key';
const EXPIRATION_TIME = '1d'; // 1 天  
const UNLESS_CONDITION = {
    path: [
        '/user/get_token',
        '/login',
        '/userinfo',
        '/user/get_token2',
        '/user/login',
        '/user/userInfo',
        '/user/login2',
        '/user/register',
        '/text',
        '/router/getList',
        '/router/get_list',
        '/router/do_delete',
        '/router/do_edit',
        '/router_api/get_list',
        '/router_api/do_delete',
        '/router_api/do_edit',
        '/router_api_group/get_list',
        '/router_api_group/do_delete',
        '/router_api_group/do_edit',


        '/search/getList',
        '/userManagement/getList',
        '/notice/getList',
        '/remixicon/get_list',
        '/router/get_list_tree'
    ]
}; // 除非条件，例如：除非用户已登录  



const jwtMiddleware = jwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'], // 您可以选择其他算法，如'RS256'  
}).unless(UNLESS_CONDITION)

// 创建JWT令牌  
const createToken = (user) => {
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
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

