const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')

const upload = multer({dest : './uploads'})


app.set("view engine", "ejs")
app.set("views", path.resolve("./Views"))

app.post('/upload', upload.single('profileImage'), (req, res)=>{
    console.log(req.body)
    console.log(req.file)
    res.status(201).send("File Uploaded Successfully.")
})

app.get('/upload', (req, res)=>{
    res.status(200).render("form.ejs")
})


app.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})