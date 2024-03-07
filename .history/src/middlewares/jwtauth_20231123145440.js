
// const jwt = require('jsonwebtoken');  
const { expressjwt: jwt } = require("express-jwt");

const {SECRET_KEY,EXPIRATION_TIME,UNLESS_CONDITION} = require('../config/base');




module.exports.jwtauth = jwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'], // 您可以选择其他算法，如'RS256'  
}).unless(UNLESS_CONDITION)

