const path = require("path")
const fs = require('fs')

const mvFilesToTheirFolder = async (files, dest) =>{

    // setup folder destination
    const destination = path.join(__dirname, "/../../", "uploads", dest)
    fs.mkdir(destination, {recursive: true}, (err) => {if(err){throw err}})

    for(let file of files){
        // setup file dest and move it 
        const fileDest = destination + '/' + file.filename
        fs.rename(file.path, fileDest, (err)=>{ if(err){throw err} })
    }
}

module.exports = {mvFilesToTheirFolder}