const path = require("path")
const fs = require('fs')

const folders = {
    paths: {
        products: path.join(__dirname, "/../../", "uploads", "products"),
        uploads: path.join(__dirname, "/../../", "uploads"),
        root: path.join(__dirname, "/../../")

    },
    names: {
        products: "/products",
        uploads: "/uploads"
    }
}

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

const initFolders = () =>{
    fs.readdir(folders.paths.root, (err, files)=>{
        if(err){ throw err }
        // if uploads folders exists close
        const exists = files.find(e => e === "uploads")
        if(exists) return

        // else create needed folders
        fs.mkdir(folders.paths.uploads, (err) => {if(err){throw err}})
        fs.mkdir(folders.paths.products, (err) => {if(err){throw err}})
    })
    
}

module.exports = {folders, initFolders, mvFilesToTheirFolder}