const { body, check } = require('express-validator');
const validate = require('../middlewares/validatorMiddleware')

const id = check('ids').not().isEmpty().bail()
const name = check('name').not().isEmpty().bail()
const notes = check('notes').not().isEmpty().bail()


const status = check('status').optional().isBoolean().isLength({ min: 1, max: 1 }).bail()

module.exports.vedit = validate([name,notes,status])

module.exports.vdel = validate([id])