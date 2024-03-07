// router/router.js
const { Router } = require('express');
const router = Router();
const routerApi = require('../controllers/router');
const schema = require('../schema/router');

router.get('/list', routerApi.list);
router.get('/get_list', routerApi.get_list);
router.get('/get_list_tree', routerApi.get_list_tree);
router.post('/do_edit', schema.vedit, routerApi.do_edit);
router.post('/do_delete', schema.vdel, routerApi.do_delete);

module.exports = router;
