const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const urlRouter = require('./Routes/url.js')
const userRouter = require ('./Routes/user.js')
const cookieParser = require('cookie-parser')
const {restrictToUserLoginOnly} = require('./Middleware/Auth.js')
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

app.use("/url",restrictToUserLoginOnly, urlRouter);
app.use("/user", userRouter);

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000.")
})