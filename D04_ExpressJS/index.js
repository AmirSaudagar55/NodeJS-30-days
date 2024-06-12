//Expressjs -> Javascript backend framework

//Why to use ExpressJS :
//1)Simplified webserver creation
//2)Simplified routing (avoids if else)
//3)Simplified middleware (traditional : manual calling in route handler, expressJS : Can be applied to specific route)
//4)Provide more abstraction 

// const http = require('http')
// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     console.log("request received")
//     res.end("welcome to home page")
// })

// const myServer = http.createServer(app)

// let portNo = 8000  

// myServer.listen(portNo, ()=>{
//     console.log(`Server is listening on Port : ${portNo}`)
// })




const express = require('express')

const app = express()

app.get('/',(req, res)=>{
    console.log("Request received")
    res.end("Welcome to Home Page")
})

app.get('/about',(req, res)=>{
    console.log("Request for About us page")
    res.end("About us page")
})

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})



