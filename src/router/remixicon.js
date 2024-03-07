// router/remixicon.js
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/remixicon');

router.get('/get_list', controller.get_list);

module.exports = router;
