const express = require("express");
const { authenticationMiddleware } = require("../middlewares/auth");
const { createItem } = require("../services/items");
const upload = require("../middlewares/images");
const router = express.Router()

router.post("/save", authenticationMiddleware, upload.array("images"), async (req, res) =>{
    
    try{
        const body = req.body
        const {
            categoryId: category_id,
            title,
            endBidsAt: end_bids_at,
            startingPrice: starting_price,
            about

        } = body
        const user_id = req.headers["user-id"]

        console.log(req.files)

        // if (!category_id || !title || !end_bids_at || !starting_price){
        //     // will be improved with joi for better data format validation
        //     return res.status(422).send("Unprocessable Data to save the product!")
        // }
        // const item = await createItem({title, about, user_id, category_id, end_bids_at, starting_price})
        // item.user_id = null

        res.status(201).send({})
    }catch(error){
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }

    
})

module.exports = router