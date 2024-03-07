// router/login.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/demo');

router.post('/', controller.login);

module.exports = router;