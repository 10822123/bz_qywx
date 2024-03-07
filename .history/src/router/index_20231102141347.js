//导入express
const {Router} = require('express')
//创建路由对象
const router= Router()


router.get('/router/getList',require('../controllers/router').router_list)

router.get('/router/get_list',require('../controllers/router').get_list)
router.get('/router/get_list_tree',require('../controllers/router').get_list_tree)
router.post('/router/do_edit', require('../schema/router').vedit, require('../controllers/router').do_edit)
router.post('/router/do_delete', require('../schema/router').vdel, require('../controllers/router').do_delete)
router.post('/router_api/do_edit', require('../controllers/router_api').do_edit)

router.get('/remixicon/get_list',require('../controllers/remixicon').get_list)


router.post('/login',require('../controllers/demo').login)
router.get('/userinfo',require('../controllers/demo').userinfo)
router.get('/search/getList',require('../controllers/demo').userinfo)
router.get('/userManagement/getList',require('../controllers/demo').userinfo)
router.get('/notice/getList',require('../controllers/demo').userinfo)
router.get('/remixIcon/getList',require('../controllers/demo').userinfo)



router.get('/user/get_token', require('../schema/user').get_token, require('../controllers/user').get_token)
router.get('/user/get_token2',  require('../controllers/user').get_token2)
router.get('/user/get_user', require('../controllers/user').get_user)
router.get('/user/register',require('../controllers/user').register)

module.exports = router