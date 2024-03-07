// router/search.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers');

router.get('/getList', controller.userinfo);

module.exports = router;
