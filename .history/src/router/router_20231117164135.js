// router/router.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/router');
const schema = require('../schema/router');

router.get('/getList', controller.router_list);
router.get('/get_list', controller.get_list);
router.get('/get_list_tree', controller.get_list_tree);
router.post('/do_edit', schema.vedit, controller.do_edit);
router.post('/do_delete', schema.vdel, controller.do_delete);

module.exports = router;
