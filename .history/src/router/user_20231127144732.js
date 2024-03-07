// router/user.js
const { Router } = require('express');
const router = Router();
const {controller} = require('../controllers');
const schema = require('../schema/user');

// router.get('/login', controller.login);


// router.get('/get_token', schema.get_token, controller.get_token);
// router.get('/get_token2', controller.get_token2);
// router.get('/get_user', controller.get_user);
// router.get('/register', controller.register);

module.exports = router;
