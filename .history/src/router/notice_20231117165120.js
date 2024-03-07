// router/notice.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/demo');

router.get('/getList', controller.userinfo);

module.exports = router;
