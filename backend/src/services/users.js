const { PrismaClient} =  require('@prisma/client')
const prisma = new PrismaClient()

const createUser = async (username, email, password) =>{
    try{
        const user = await prisma.users.create({data: {username, email, pass: password}})
        return user
    } catch(err) {throw err}
}

module.exports = { createUser } 