// https://www.google.com/search?q=nightmare+meaning&oq=Nightmare&gs_lcrp=EgZjaHJvbWUqCggBEAAY
//------   -------------- ------ ------------------------------------------
// |               |        |                 |
//Protocol       Domain   Path         Query Parameter (key value pairs separated using '&')

const http = require('http')
const url = require('url')

const httpServer = http.createServer((req, res)=>{
    console.log("New request received.")
    console.log(req.url)
})

httpServer.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})