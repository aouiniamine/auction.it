require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const {urlencoded, json} = require("body-parser")

const usersRouter = require("./src/routes/users")
const itemsRouter = require("./src/routes/items")
const categoriesRouter = require("./src/routes/categories")
const adminRouter = require("./src/routes/admin")
const filesRouter = require("./src/routes/files")

const { initFolders } = require("./src/services/files")

// parse incoming data
app.use(urlencoded({ extended: false }))
app.use(json())

// unable cors
app.use(cors())

// routes
app.use("/api/user", usersRouter)
app.use("/api/items", itemsRouter)
app.use("/api/categories", categoriesRouter)
app.use("/api/admin", adminRouter)
app.use("/file", filesRouter)

// init folder to prevent errors
initFolders()

app.listen(process.env.PORT, ()=>console.log("Server is runing on:", process.env.PORT))