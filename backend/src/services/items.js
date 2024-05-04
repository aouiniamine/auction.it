const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const createItem = async (item) =>{
    const created_at = new Date()
    return await prisma.items.create({...item, created_at})
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

module.exports = {createItem, getItemById, getItemsByCategoryId, getItemsByUserId, deleteItemById, updateItemById}