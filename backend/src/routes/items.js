const express = require("express");
const { authenticationMiddleware } = require("../middlewares/auth");
const {createItem, getAllPendingItems, setItemToApproved, setItemToRefused, deleteItemById, getItemById, getPendingItemsByUserId, getInAuctionItems} = require("../services/items");
const upload = require("../middlewares/files");
const { mvFilesToTheirFolder, folders, getItemImages, deleteItemFolder } = require("../services/files");
const { adminAuthMiddleware } = require("../middlewares/admin");
const router = express.Router()

router.post("/save", authenticationMiddleware, upload.array("images"), async (req, res) =>{
    
    try{
        // set data
        const body = req.body
        let {
            category_id,
            title,
            end_bids_at,
            starting_price,
            about

        } = body
        const endBidsAt = new Date(end_bids_at)
        endBidsAt.setHours(17)
        endBidsAt.setMinutes(0)
        endBidsAt.setSeconds(0)
        if (!category_id || !title || !end_bids_at || !starting_price){
            // will be improved with joi for better data format validation
            return res.status(422).send("Unprocessable Data to save the product!")
        }
        let itemToSave = {title, about, category_id: Number(category_id), end_bids_at: endBidsAt, starting_price: Number(starting_price)}
        const item = await createItem({...itemToSave, user_id: req.user.id})
        
        const imagesDest = `${folders.names.products}/${item.id}`
        await mvFilesToTheirFolder(req.files, imagesDest)
        
        res.status(201).send({item: itemToSave})

    }catch(error){
        console.log(error)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }

})

router.get("/get/pending", adminAuthMiddleware, async (req, res) => {
    try{

        const allPendingItems = await getItemImages(await getAllPendingItems())
        res.status(200).send({items: allPendingItems})
    }catch(error){
        console.log(error)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }
})

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try{
        const [item] = await getItemImages([await getItemById(id)])
        res.status(200).send({item, status: 200})
        
    } catch(err){
        console.log(err)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }

})

router.get("/mine/pending", authenticationMiddleware, async (req, res) => {
    const {id} = req.user
    try{
        const items = await getItemImages(await getPendingItemsByUserId(id))
        res.status(200).send({items, status: 200})

    } catch(err){
        console.log(err)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }
})

router.get("/now/auction", async (req, res) => {
    try {
        const items = await getItemImages(await getInAuctionItems())
        res.status(200).send({items, status: 200})

    } catch(err){
        console.log(err)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }
})

router.put("/:id/approve", adminAuthMiddleware, async (req, res) => {
    const { id } = req.params
    try {
        const approvedItem = await setItemToApproved(id)
        res.status(200).send({approvedItem, status: 200})
    } catch (error){
        console.log(error)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }
})

router.put("/:id/refuse", adminAuthMiddleware, async (req, res) => {
    const { id } = req.params
    try {
        const refusedItem = await setItemToRefused(id)
        res.status(200).send({refusedItem, status: 200})
    } catch (error){
        console.log(error)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }
})

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const { id } = req.params
    try {
        await deleteItemFolder(id)
        const deltedItem = await deleteItemById(id)
        
        res.status(200).send({deltedItem, status: 200})
    } catch (error){
        console.log(error)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }
})

module.exports = router