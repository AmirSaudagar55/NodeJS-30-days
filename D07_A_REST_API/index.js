// GET /users - List all users
// GET /users/1 - Get the user with ID 1
// GET /users/2 - Get the user with ID 2

// POST /users - Create new user

// PATCH /users/1 - Edit the user with ID 1
// DELETE /users/1 - Delete the user with ID 1

const express = require('express')
const data = require("./MOCK_DATA.json")

const app = express()

app.get('/users',(req, res)=>{
    const users = data

    const html = `<ul>
        ${users.map((user)=>
            `<li>
                ${user.first_name}
            </li>`
        ).join("")
        }
    </ul>`

    res.send(html)
})
.post((req,res)=>{              //handle different requests on same route
    res.send("Pending")
})
.patch((req,res)=>{             
    res.send("Pending")
})
.delete((req,res)=>{              
    res.send("Pending")
})



app.get(`/users/:id`, (req, res)=>{             //to specify dynamic parameter we use ':variable_name'
    const id = req.params.id
    const user = data.find((user) => user.id==id)
    const html = `<h1>${user.first_name}</h1>`
    res.send(html)
})

app.get(`/api/users`, (req, res)=>{
    res.json(data)
})

app.get(`/api/users/:id`, (req, res)=>{
    const id = req.params.id
    const user = data.find((user) => user.id==id)
    res.json(user)
})

app.listen(8000, ()=>{
    console.log("Server is listening on PORT 8000")
})