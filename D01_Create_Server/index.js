//HTTP Server
// STEPS ::
// 1) Import inbuilt module 'http'
// 2) Create a server using http.createServer((req, res)=>{}) http.METHODS.
// 3) Make server to listen on defined port no. using listen(portno, callback) method.

const http = require('http')

const myServer = http.createServer((req, res)=>{
    console.log("request received")
    res.end("Hello From server.")
})

let portNo = 8000  // best practice : import it from .env

myServer.listen(portNo, ()=>{
    console.log(`Server is listening on Port : ${portNo}`)
})