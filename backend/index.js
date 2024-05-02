require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const {urlencoded, json} = require("body-parser")

// parse incoming data
app.use(urlencoded({ extended: false }))
app.use(json())

// unable cors
app.use(cors())

app.listen(process.env.PORT, ()=>console.log("Server is runing on:", process.env.PORT))