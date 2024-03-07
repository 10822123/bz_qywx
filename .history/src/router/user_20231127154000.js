// router/user.js
const { Router } = require('express');
const router = Router();
const {demo} = require('../controllers');

router.get('/login', demo.login);
module.exports = router;
