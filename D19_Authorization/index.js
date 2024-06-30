const express = require('express')
const app = express()
const authPage = require("./middlewares")

app.use(express.json())

app.get("/marks",authPage(["teacher", "admin"]),(req, res)=>{
    res.status(200).json({
        "Amir" : 100,
        "John" : 80,
        "Tony" : 99
    })
})


app.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})