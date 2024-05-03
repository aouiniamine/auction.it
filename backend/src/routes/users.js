const express = require("express");
const { createUser } = require("../services/users");
const router = express.Router()

router.post("/register", async (req, res) =>{
    const body = req.body
    const {username, email, password} = body;

    const token = await createUser(username, email, password)
    res.status(201).send({token})
})


module.exports = router