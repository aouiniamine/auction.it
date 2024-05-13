const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const saveBid = async (itemId, userId, price) =>{
    return await prisma.bids.create({
        data: {
            item_id: Number(itemId),
            user_id: Number(userId),
            price: Number(price)
        },
        select: {
            price: true,
            user: true
        }
    })
}

module.exports = { saveBid }