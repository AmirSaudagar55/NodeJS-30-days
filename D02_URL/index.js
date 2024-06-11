// https://www.google.com/search?q=nightmare+meaning&oq=Nightmare&gs_lcrp=EgZjaHJvbWUqCggBEAAY
//------   -------------- ------ ------------------------------------------
// |               |        |                 |
//Protocol       Domain   Path         Query Parameter (key value pairs separated using '&')

const http = require('http')
const url = require('url')

const httpServer = http.createServer((req, res)=>{
    console.log("New request received.")

    const parseURL = url.parse(req.url)

    console.log(parseURL)
// New request received.
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?q=nightmare+meaning&op=wallpaper',
//   query: 'q=nightmare+meaning&op=wallpaper',
//   pathname: '/image',
//   path: '/image?q=nightmare+meaning&op=wallpaper',
//   href: '/image?q=nightmare+meaning&op=wallpaper'
// }

    switch(parseURL.pathname)
    {
        case '/'        :   res.end("Welcome to Home Page")
                            break
        case '/about'   :   res.end("About page")
                            break
        case '/contact' :   res.end("Contact us")
                            break
        case '/image'   :   res.end(`Processing the Query ${parseURL.query}`)
                            break
        default         :   res.end("404 Not Found")
    }

})


httpServer.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})