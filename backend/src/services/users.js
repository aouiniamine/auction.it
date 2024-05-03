const { PrismaClient} =  require('@prisma/client')
const { createToken } = require('../utils/tokenHandler')
const bcrypt = require("bcrypt")
const prisma = new PrismaClient()

const createUser = async (username, email, password) =>{
    try{
        // gen salt and hash password
        const salt = await bcrypt.genSalt(7)
        const hashedPass = await bcrypt.hash(password, salt)

        // create user and generate his token
        const user = await prisma.users.create({data: {username, email, pass: hashedPass}})
        const token = await createToken(user.id)
        return token
    } catch(err) {throw err}
}

module.exports = { createUser } 