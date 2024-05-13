const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const itemState = {
    pending: 'pending',
    refused: 'refused',
    approved: 'approved'

}
const createItem = async (item) =>{
    const created_at = new Date()
    return await prisma.items.create({
        data: {...item, created_at}
    })
}

const getItemById = async (id) => {
    return await prisma.items.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            user_item: {
                select: {
                    username: true,
                    email: true
                }
            
            },
            bids: true,
            comments: {
                include: {
                    user: {
                        select: {
                            username: true
                        }
                    }
                }
            },
            bids: {
                include: {
                    user: {
                        select: {
                            username: true
                        }
                    },
                }
            }
        }
    })
}

const getItemsByUserId = async (user_id) => {
    return await prisma.items.findMany({
        where: {
            user_id: Number(user_id)
        }
    })
}

const getPendingItemsByUserId = async (user_id) => {
    return await prisma.items.findMany({
        where: {
            user_id: Number(user_id),
            state: itemState.pending
        }
    })
}

const getItemsByCategoryId = async (category_id) => {
    return await prisma.items.findMany({
        where: {
            category_id
        }
    })
}

const getAllPendingItems = async () =>{
    return await prisma.items.findMany({
        where: {
            state: itemState.pending
        }
    })
}

const setItemToApproved = async (id) => {
    return await prisma.items.update({
        data: {
            state: itemState.approved
        },
        where: {
            id: Number(id)
        }
    })
}
const setItemToRefused = async (id) => {
    return await prisma.items.update({
        data: {
            state: itemState.refused
        },
        where: {
            id: Number(id)
        }
    })
}

const updateItemById = async (id, data) => {
    return await prisma.items.update({
        where: {
            id
        },
        data
    })
}

const deleteItemById = async (id) =>{
    return await prisma.items.delete({
        where: {
            id: Number(id)
        }
    })
}

const getInAuctionItems = async () => {
    return await prisma.items.findMany({
        where: {
            state: itemState.approved,
            AND: {
                end_bids_at: {
                    gte: new Date()
                }
            }
        }
    })
}

module.exports = {
    createItem,

    getInAuctionItems,
    getPendingItemsByUserId,
    getItemById,
    getItemsByCategoryId,
    getAllPendingItems,
    getItemsByUserId,
    
    setItemToApproved,
    setItemToRefused,
    updateItemById,
    
    deleteItemById,
}