const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const bcrypt = require("bcrypt")
const adminUtils = require("../utils/admin")

const logAdmin = async (username, password) =>{
    const admin = await prisma.admin.findUnique({
        where: { username }
    })
    if(!admin) throw {error: "wrong credential!!", status: 401}

    const validPassword = await bcrypt.compare(password, admin.pass)
    if(!validPassword) return {error: "wrong credential!!", status: 401}

    const adminToken = await adminUtils.createToken(admin.id)
    return {adminToken, status: 200}

}

const createAdmin = async (username, pass) =>{
    const salt = await bcrypt.genSalt(7)
    const hashedPass = await bcrypt.hash(pass, salt)
    return await prisma.admin.create({
        data: { username, pass: hashedPass }
    })
}

module.exports = { logAdmin, createAdmin }