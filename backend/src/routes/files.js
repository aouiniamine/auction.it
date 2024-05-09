const router = require("express").Router()
const fs = require('fs')
const path = require("path")
const { getFileStream } = require("../services/files")
const mime = require('mime-types')
const { start } = require("repl")
const { error } = require("console")

router.get("/:entry/:id/:file", async (req, res) => {
    const {entry, id, file} = req.params

    try{
        // get file path
        const filePath = path.join(entry, id, file)
        
        // send file stream
        const stream = await getFileStream(filePath)
        if(!stream){
            return res.status(404).send({error: '404 - file not found', status: 404})
        }
        stream.pipe(res)
        
    } catch(error) {
        console.log(error)
        res.status(500).send({error: "500 Internal Server Error!!", status: 500})
    }
})

module.exports = router 