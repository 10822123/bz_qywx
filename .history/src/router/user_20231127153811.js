// router/user.js
const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/login', controllers.login);
module.exports = router;
