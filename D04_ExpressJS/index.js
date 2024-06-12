//Expressjs -> Javascript backend framework

//Why to use ExpressJS :
//1)Simplified webserver creation
//2)Simplified routing (avoids if else)
//3)Simplified middleware (traditional : manual calling in route handler, expressJS : Can be applied to specific route)
//4)Provide more abstraction 

const express = require('express')

const app = express()

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})

