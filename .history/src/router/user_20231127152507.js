// router/user.js
const { Router } = require('express');
const router = Router();
const {user} = require('../controllers');
const schema = require('../schema/user');
console.log('user2222222'user.login)

 router.get('/login', user.login);
// router.get('/get_token2', controller.get_token2);
// router.get('/get_user', controller.get_user);
// router.get('/register', controller.register);

module.exports = router;