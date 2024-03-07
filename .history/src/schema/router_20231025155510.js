const { body, check } = require('express-validator');
const validate = require('../middlewares/validatorMiddleware')

const id = check('ids').not().isEmpty().bail()
const name = check('name').not().isEmpty().bail()
const path = check('path').not().isEmpty().bail()
const title = check('title').not().isEmpty().bail()
const component = check('component').not().isEmpty().bail()
const hidden = check('hidden').bail()
const levelHidden = check('levelHidden').bail()
const no_keepalive = check('no_keepalive').bail()
const status = check('status').bail()

// const hidden = check('hidden').optional().isBoolean().isLength({ min: 1, max: 1 }).bail()
// const levelHidden = check('levelHidden').optional().isBoolean().isLength({ min: 1, max: 1 }).bail()
// const no_keepalive = check('no_keepalive').optional().isBoolean().isLength({ min: 1, max: 1 }).bail()
// const status = check('status').optional().isBoolean().isLength({ min: 1, max: 1 }).bail()

module.exports.vedit = validate([name,path,title,component,hidden,levelHidden,no_keepalive,status])

module.exports.vdel = validate([id])