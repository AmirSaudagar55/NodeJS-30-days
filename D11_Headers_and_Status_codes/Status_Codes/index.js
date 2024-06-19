const express = require('express')
const app = express()


app.post("/user", (req, res)=>{
    //code block to create user
    res.status(201).send("User created successfully")
})


app.get("/", (req, res)=>{
    console.log("Request Received")
    res.status(200).send("Home Page")
})


app.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})