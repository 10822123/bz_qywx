const { body, check } = require('express-validator');
const validate = require('../middlewares/validatorMiddleware')

const id = check('id').not().isEmpty().isInt().bail()
const name = check('name').not().isEmpty().bail()
const path = check('path').not().isEmpty().bail()
const title = check('title').not().isEmpty().bail()
const component = check('component').not().isEmpty().bail()
const hidden = check('hidden').optional().isIn(['yes', 'no']).bail()
const levelHidden = check('levelHidden').optional().isIn(['yes', 'no']).bail()
const no_keepalive = check('no_keepalive').optional().isIn(['yes', 'no']).bail()
const status = check('status').optional().isIn(['yes', 'no']).bail()



module.exports.vall = validate([name,path,title,component,hidden,levelHidden,no_keepalive,status])

module.exports.vdel = validate([id])