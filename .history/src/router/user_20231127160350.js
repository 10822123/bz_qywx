// router/user.js
const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');

router.post('/login', user.login);
router.post('/info', user.info);

module.exports = router;
