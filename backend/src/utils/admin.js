const jwt = require("jsonwebtoken")

module.exports = {
    createToken: (id) => {
        const createdAt = new Date()
        return jwt.sign({id, createdAt}, process.env.ADMIN_TOKEN_SECRET)
    },
    verifyToken: (token) => jwt.verify(token, process.env.ADMIN_TOKEN_SECRET)
}