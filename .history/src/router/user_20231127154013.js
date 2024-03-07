// router/user.js
const { Router } = require('express');
const router = Router();
const {user} = require('../controllers');
 router.get('/login', user.login);
module.exports = router;
