const { verifyToken } = require("../utils/tokenHandler");

module.exports = async (io) => {
    io.on('connection', async (socket) => {
        console.log('a user connected');
        const token = socket.handshake.headers.authorization
        let user = null
        try{
            user = await verifyToken(token) || null
            console.log("logged client is connected:", user.id)
        }catch(err){ console.log("not logged client is connected.")}
        
        require("./comments")(io, socket, user)
    });
}