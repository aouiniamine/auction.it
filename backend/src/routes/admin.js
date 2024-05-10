const express = require("express")
const { logAdmin } = require("../services/admin")
const router = express.Router()

router.post('/login', async (req, res) => {
    const {username, password} = req.body
    try{
        
        const response = await logAdmin(username, password)
        res.status(response.status).send(response)
    }catch(error){
        console.log(error)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }
})

module.exports = router