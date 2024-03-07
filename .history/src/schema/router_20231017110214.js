const { body, check, validationResult } = require('express-validator');  
const validate = require('../middlewares/validatorMiddleware')

console.log(check('name'))
const vdata = [
    check('name').not().isEmpty().withMessage('11111Name field cannot be empty').bail(),
    check('path').not().isEmpty().withMessage('Name field cannot be empty').bail(),
    check('title').not().isEmpty().withMessage('Name field cannot be empty').bail(),
    check('component').not().isEmpty().withMessage('Name field cannot be empty').bail()
]

const name = check('name').not().isEmpty().withMessage('11111Name field cannot be empty').bail();

module.exports.router = validate([name])