// router/sse_endpoint.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/sse_endpoint');

router.get('/endpoint', controller.see_server);

module.exports = router;
