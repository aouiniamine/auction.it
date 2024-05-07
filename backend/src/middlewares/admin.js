const { verifyToken, isSessionExpired } = require("../utils/admin")

async function adminAuthMiddleware(req, res, next){

    // if user users the same route go to next middleware
    const token = req.header('admin_authorization')
    const userToken = req.header('authorization')
    if(!token && (req.user || userToken) ){ return next() }

    try{
        
        const verifiedAdmin =  await verifyToken(token)
        const {createdAt, id} = verifiedAdmin

        const isExpired = await isSessionExpired(createdAt)
        if(isExpired) { 
            res.status(440).send({error: "440 - Session Has Expired", status: 440})
            return
        }

        req.isAdmin = {id}
        next()

    } catch(err){ // throw 401 Unauthorized if token is invalid 
        res.status(403).send({error: "403 - Forbidden", status: 403})
    }
}

module.exports = { adminAuthMiddleware }