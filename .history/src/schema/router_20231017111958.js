const { body, check, validationResult } = require('express-validator');  
const validate = require('../middlewares/validatorMiddleware')




const vdata = [
    check('name').not().isEmpty().bail(),
    check('path').not().isEmpty().bail(),
    check('title').not().isEmpty().bail(),
    check('component').not().isEmpty().bail()
]



module.exports.vall = validate(vdata)