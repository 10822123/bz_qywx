// router/user.js
const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');

router.post('/login', user.login);
router.get('/logout', user.logout);
router.get('/info', user.info);
router.get('/search', user.info);
router.get('/notice', user.info);

module.exports = router;
