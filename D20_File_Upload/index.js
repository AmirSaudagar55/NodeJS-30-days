const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      console.log(file.originalname)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname )
    }
  })
  
const upload = multer({ storage: storage })



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