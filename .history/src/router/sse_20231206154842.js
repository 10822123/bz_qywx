// router/sse_endpoint.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/sse');

router.get('/server', controller.see_server);

module.exports = router;
