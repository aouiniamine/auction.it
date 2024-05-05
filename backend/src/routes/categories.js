const express = require("express");
const { authenticationMiddleware } = require("../middlewares/auth");
const { getAllCategories, getCategoryById } = require("../services/categories");
const { route } = require("./users");
const router = express.Router()


router.get("/get/all", authenticationMiddleware, async (req, res) =>{
    try {
        const categories = await getAllCategories()
        res.status(200).send({categories})

    } catch(err){
        res.send(500).send({error: "500 - Internal Server Error!!", status: 500})
    }

})

router.get("/get/:id", authenticationMiddleware, async (req, res) => {
    try {

        const {id} = req.params
        const category = await getCategoryById(Number(id))
        
        res.status(200).send({category})
    } catch(err){
        res.status(500).send({error: "500 - Internal Server Error!!", status: 500})
    }
})

module.exports = router