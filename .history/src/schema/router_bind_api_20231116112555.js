const { body, check } = require('express-validator');
const validate = require('../middlewares/validatorMiddleware')

const id = check('ids').not().isEmpty().bail()
const router_id = check('router_id').not().isEmpty().bail()
const api_id = check('api_id').not().isEmpty().bail()


module.exports.vedit = validate([router_id,api_id])

module.exports.vdel = validate([id])