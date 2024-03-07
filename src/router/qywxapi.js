// router/qywxapi.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/qywxapi');

router.get('/constructor', controller.constructor);

module.exports = router;
