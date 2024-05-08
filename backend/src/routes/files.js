const router = require("express").Router()
const fs = require('fs')
const path = require("path")
const { getFileStream } = require("../services/files")
const mime = require('mime-types')

router.get("/:entry/:id/:file", async (req, res) => {
    const {entry, id, file} = req.params

    try{
        // get file path
        const filePath = path.join(entry, id, file)
        
        // send file stream
        const stream = getFileStream(filePath)
        stream.pipe(res)
        
    } catch(error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router 