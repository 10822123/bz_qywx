// router/user.js
const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');

router.get('/login', user.login);
router.post('/logout', user.logout);
router.get('/info', user.info);
router.get('/search', user.info);
router.get('/getList', info);

module.exports = router;
