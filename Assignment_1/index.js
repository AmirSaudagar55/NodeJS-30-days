// Assignment:
// Objective: Create a simple API that allows users to manage a collection of items (e.g., tasks, notes, products).

//GET /items - Retrieve all items.
// POST /items - Create a new item.
// GET /items/:id - Retrieve a specific item by ID.
// PUT /items/:id - Update a specific item by ID.
// DELETE /items/:id - Delete a specific item by ID.

const http = require('http')
const url = require('url')

const items = ["hello", "apple"]

const httpServer = http.createServer((req, res)=>{
    console.log("New request received !")

    const parsedURL = url.parse(req.url)
    const httpMethod = req.method

    if(parsedURL.pathname==='/items' && httpMethod==='GET' )
    {
        items.forEach(item => {
            console.log(JSON.parse(item))    
        });
        
    }


})

httpServer.listen(8000, ()=>{
    console.log("server is listening on port 8000")
})

