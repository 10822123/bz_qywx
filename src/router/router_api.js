// router/router_api.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/router_api');

router.get('/get_list', controller.get_list);
router.post('/do_delete', controller.do_delete);
router.post('/do_edit', controller.do_edit);

module.exports = router;
