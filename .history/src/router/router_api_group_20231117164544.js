// router/router_api_group.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/router_api_group');

router.get('/get_list', controller.get_list);
router.post('/do_delete', controller.do_delete);
router.post('/do_edit', controller.do_edit);
router.get('/get_list_api_tree', controller.get_list_api_tree);

module.exports = router;
