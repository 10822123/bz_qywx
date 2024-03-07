const { body, check, validationResult } = require('express-validator');  
const validate = require('../middlewares/validatorMiddleware')




const vdata = [
    check('name').not().isEmpty().bail(),
    check('path').not().isEmpty().withMessage('Name field cannot be empty').bail(),
    check('title').not().isEmpty().withMessage('Name field cannot be empty').bail(),
    check('component').not().isEmpty().withMessage('Name field cannot be empty').bail()
]



module.exports.vall = validate(vdata)