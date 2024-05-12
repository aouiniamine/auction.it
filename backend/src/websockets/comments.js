const { saveComment } = require("../services/comments")

module.exports = async (io, socket, user) =>{
    if (user){
        socket.on('send:comment', async data =>{
            const itemId = data.id
            const comment = await saveComment(itemId, user.id, data.comment)
            io.emit("recieve:comment-"+itemId, comment)
        })

    }
}