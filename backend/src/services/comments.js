const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const saveComment = async (itemId, userId, comment) =>{
    return await prisma.comments.create({
        data: {
            item_id: Number(itemId),
            user_id: Number(userId),
            comment
        },
        select: {
            comment: true,
            user: true
        }
        
    })
}

module.exports = {saveComment}