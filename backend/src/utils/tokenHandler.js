const jwt = require("jsonwebtoken")

module.exports = {
    createToken: (id) => jwt.sign({id}, process.env.TOKEN_SECRET),
    verifyToken: (token) => jwt.verify(token, process.env.TOKEN_SECRET)
}