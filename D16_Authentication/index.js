const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const router = require('./Routes/url.js')
var cookieParser = require('cookie-parser')
const app = express()


mongoose.connect("mongodb+srv://saudagaramir55:123@cluster0.oksg8hd.mongodb.net/NodeJS30?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("! MongoDB connected")
})
.catch((err)=>{
    console.log("!! MongoDB connection Failed \n ",err)
})

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.resolve("./Views"))
app.use("/url", router);

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000.")
})