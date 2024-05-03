const { PrismaClient} =  require('@prisma/client')
const { createToken } = require('../utils/tokenHandler')
const bcrypt = require("bcrypt")
const prisma = new PrismaClient()

const registerUser = async (username, email, password) =>{
    try{
        // gen salt and hash password
        const salt = await bcrypt.genSalt(7)
        const hashedPass = await bcrypt.hash(password, salt)

        // create user and generate his token
        const user = await prisma.users.create({data: {username, email, pass: hashedPass}})
        const token = await createToken(user.id)
        return {token, status: 201}
    } catch(err) {throw err}
}

const logUser = async (credential, password) => {
    // find user with email or username
    const [user] = await prisma.users.findMany({
        where: {
            OR: [{username: credential}, {email: credential}],
        },
        take: 1
    })
    // return error if user not found 
    if (!user) return {error: "user not found", status: 404}

    // return error if password invalid
    const validPassword = await bcrypt.compare(password, user.pass)
    if(!validPassword) return {error: "your password is incorrect", status: 401}

    // return token if user credential is valid
    const token = await createToken(user.id)
    return {token, status: 200}
}

module.exports = { registerUser, logUser } 