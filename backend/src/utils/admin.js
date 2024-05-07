const jwt = require("jsonwebtoken")

module.exports = {
    createToken: (id) => {
        const createdAt = new Date()
        return jwt.sign({id, createdAt}, process.env.ADMIN_TOKEN_SECRET)
    },
    verifyToken: (token) => jwt.verify(token, process.env.ADMIN_TOKEN_SECRET),
    isSessionExpired: (date) =>{
        const now = Date.now();
        const dateInMilliseconds = new Date(date).getTime()

        const difference = now - dateInMilliseconds;
        return difference > (3 * 60 * 60 * 1000);
    }
}