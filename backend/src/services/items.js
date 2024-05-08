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
            id
        }
    })
}

const getItemsByUserId = async (user_id) => {
    return await prisma.items.findMany({
        where: {
            user_id
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
            id
        }
    })
}

module.exports = {setItemToApproved, setItemToRefused, createItem, getItemById, getItemsByCategoryId, getAllPendingItems, getItemsByUserId, deleteItemById, updateItemById}