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
    EXPIRATION_TIME: '1d',
    UNLESS_CONDITION_PATH : [
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
            '/router_bind_api/do_authorize_api',
            '/router_api/get_list',
            '/router_api/do_delete',
            '/router_api/do_edit',
            '/router_api_group/get_list',
            '/router_api_group/do_delete',
            '/router_api_group/do_edit',
            '/router_api_group/get_list_api_tree',
            
    
            '/search/getList',
            '/userManagement/getList',
            '/notice/getList',
            '/remixicon/get_list',
            '/router/get_list_tree'
        ]
}


