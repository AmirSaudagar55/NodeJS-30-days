//HTTP Server
// STEPS ::
// 1) Import inbuilt module 'http'
// 2) Create a server using http.createServer((req, res)=>{}) http.METHODS.
// 3) Make server to listen on defined port no. using listen(portno, callback) method.

const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res)=>{    //Best practice :: Dont do blocking tasks(sync task)
    console.log("request received")
    
    // console.log(req)
    // console.log(req.headers)

    //loging the requests
    let log = `${Date.now()} : ${req.url} \t New request received from : ${req.headers.host} \n`

    fs.appendFile('Logs.txt',log, (err, data)=>{
        res.end("Your request is logged successfully !")
    })

})

let portNo = 8000  // best practice : import it from .env

myServer.listen(portNo, ()=>{
    console.log(`Server is listening on Port : ${portNo}`)
})