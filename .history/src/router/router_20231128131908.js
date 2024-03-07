// router/router.js
const { Router } = require('express');
const router = Router();
const router = require('../controllers/router');
const schema = require('../schema/router');

router.get('/list', router.list);
router.get('/get_list', router.get_list);
router.get('/get_list_tree', router.get_list_tree);
router.post('/do_edit', schema.vedit, router.do_edit);
router.post('/do_delete', schema.vdel, router.do_delete);

module.exports = router;
