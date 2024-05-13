const { saveBid } = require("../services/bids")

module.exports = async (io, socket, user) =>{
    if(user){
        socket.on("add:bid", async data =>{
            
            const bid = await saveBid(data.id, user.id, data.price)
            io.emit("added:bid-"+ data.id, bid)
        })
    }
}