const express = require('express')
const app = express()

app.get("/", (req, res)=>{
    console.log(req.headers)
    res.send("Home Page")
})



app.listen(8000, ()=>{
    console.log("Server is listening on the port 8000")
})