// 这是一个全局的配置文件
global.ROOT_DIR = process.cwd()+'/src';

module.exports = {
    //服务端口
    server_port:3000,

    
    // 加密和解密 Token 的秘钥
    jwtSecretKey: 'cuican No1. ^_^',
    // token 的有效期
    expiresIn: '10h',

    SECRET_KEY: 'your-secret-key',
    EXPIRATION_TIME: '1d'


}


