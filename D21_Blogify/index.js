const express = require('express')
const mongoose = require('mongoose')


const app = express()


app.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})