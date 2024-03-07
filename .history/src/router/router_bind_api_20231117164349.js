// router/router_bind_api.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/router_bind_api');

router.post('/do_authorize_api', controller.do_authorize_api);

module.exports = router;
