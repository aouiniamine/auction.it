const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const getAllCategories = async () => {
    return await prisma.categories.findMany()
}

const getCategoryById = async (id) => {
    return await prisma.categories.findUnique({
        where: {
            id
        }
    })
}

module.exports = { getAllCategories, getCategoryById }