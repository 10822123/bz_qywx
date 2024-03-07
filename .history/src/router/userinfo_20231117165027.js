// router/userinfo.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/demo');

router.get('/', controller.userinfo);

module.exports = router;
