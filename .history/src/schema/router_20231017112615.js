const { body, check } = require('express-validator');  
const validate = require('../middlewares/validatorMiddleware')




const vdata = [
    check('name').not().isEmpty().bail(),
    check('path').not().isEmpty().bail(),
    check('title').not().isEmpty().bail(),
    check('component').not().isEmpty().bail(),
    check('hidden').isIn(['yes', 'no']) .isEmpty().bail(),
    check('levelHidden').isIn(['yes', 'no']) .isEmpty().bail(),
    check('no_keepalive').isIn(['yes', 'no']) .isEmpty().bail(),
    check('status').isIn(['yes', 'no']) .isEmpty().bail(),
]



module.exports.vall = validate(vdata)