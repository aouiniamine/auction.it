const express = require("express");
const { registerUser, logUser } = require("../services/users");
const router = express.Router()

router.post("/register", async (req, res) =>{
    const body = req.body
    const {username, email, password} = body;

    const result = await registerUser(username, email, password)
    res.status(result.status).send(result)
})

router.post("/login", async (req, res) => {
    const body = req.body
    const {credential, password} = body

    const result = await logUser(credential, password)
    res.status(result.status).send(result)
})

module.exports = router