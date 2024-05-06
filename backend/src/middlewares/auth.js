const { verifyToken } = require("../utils/tokenHandler")

async function authenticationMiddleware(req, res, next){
    const token = req.header('authorization')
    try{
        // extract user id from token and set it to request header
        const {id} =  await verifyToken(token)
        req.user = {id}

        next()

    } catch(err){ // throw 401 Unauthorized if token is invalid 
        res.status(401).send({error: "401 Unauthorized", status: 401})
    }
}

module.exports = { authenticationMiddleware }