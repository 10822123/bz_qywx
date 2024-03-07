// router/router_api.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/sse_endpoint');

router.get('/sse_endpoint', controller.see_server);

module.exports = router;
