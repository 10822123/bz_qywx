const { heck } = require('express-validator');
const validate = require('../middlewares/validatorMiddleware')

const id = check('ids').not().isEmpty().bail()
const name = check('name').not().isEmpty().bail()
const path = check('path').not().isEmpty().bail()
const status = check('status').optional().isBoolean().isLength({ min: 1, max: 1 }).bail()

module.exports.vedit = validate([name,path,status])

module.exports.vdel = validate([id])