require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const {urlencoded, json} = require("body-parser")
const {Server} = require("socket.io")
const { createServer } = require('node:http');

const { initFolders } = require("./src/services/files")

// websockets setup & config 
const server = createServer(app)
const socketConfig = {
    cors: {
        origin: '*',
        allowedHeaders: ["authorization"]
      }
}
const io = new Server(server, socketConfig)

// parse incoming data
app.use(urlencoded({ extended: false }))
app.use(json())

// unable cors
app.use(cors({
    origin: process.env.CLIENT_URL
}))

// routes
app.use("/api/user", require("./src/routes/users"))
app.use("/api/items", require("./src/routes/items"))
app.use("/api/categories", require("./src/routes/categories"))
app.use("/api/admin", require("./src/routes/admin"))
app.use("/api/file", require("./src/routes/files"))

// init folder to prevent errors
initFolders()

// websockets
require("./src/websockets/index")(io)

server.listen(process.env.PORT, ()=>console.log("Server is runing on:", process.env.PORT))