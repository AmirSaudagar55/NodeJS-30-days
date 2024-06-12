// Http Provides various methods to fetch and manipulate data on server
//Http methods::
// GET : used to retrieve data
// POST :  Creates an resources  
// PUT :  Overwrites the existing resource
// PATCH : use to modify the part of the resourse
// DELETE : Use to delete the single resource
// 

// POST : n identical request creates n identical resources at server || not idempotent : same requests have different effects on server||201-> record gets created || Firstly header is sent and then body in form of chunks of data (use req.on('data', chunks=>{}), req.on('end', (error)=>{}))
// PUT :  n identical request creates a single resource and modify each time || Idempotent : Same requests have same effects on server  || 200-> record get updated

//get and post method for form submsiion :: 
// GET : data will be in url
// POST : data will be in body

//Browser initially makes GET request to fetch page contents


const http = require('http')
const fs = require('fs')


const httpServer = http.createServer((req, res)=>{
    console.log(req.method)

    const log = `${Date.now()}\t:${req.method}\t:${req.headers.host}\n`
    fs.appendFile("log.txt", log, (err, data)=>{
        res.end("Welcome to home page")
    })

    
})


httpServer.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})