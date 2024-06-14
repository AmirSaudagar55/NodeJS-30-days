//What is REST API?
//API that is based on Respresentational State Transfer Architecture (REST architecture)
//REST : It is client-server architecture.
//Server recives the request from client and then processes it and send back the response (text, image, video, audio, html, json(key value pairs), etc)

//There are 2 rules which I consider while developing RESTful API : (These are not officially)
//1) Understanding the Client
//We use Server side Rendering -> we render the html on server side and send rendered html to client when we know that client is browser. eg. res.send(), res.render()
//When we dont know client then we use Client Side Rendering : we send response in form of JSON (browser, mobile application, IoT, etc).  eg. res.json()
//2) Respect Http Methods :
//We have to use http methods with respect their meanings :
//eg. we will use GET /user method to fetch all users
//                POST /user: to create new user
//                PATCH /user/:id: To update the information of user (People use POST for updating and deleting too, Which is a bad practice)
//                DELETE /user/:id: To delete a specific user
//Bad Practice:
//GET /getUser
//POST /createUser
//PATCH /updateUser/:id
//DELETE /deleteUser/:id


//When we want to develope a hybrid API i.e it will be used by both browser and other platforms:
// For Browsers : Make routes in format like : /user/:id ---> it should send rendered html response to browser
// Other Platforms : Make routes in format like : /api/user/:id ---> it should send json response.



const express = require('express')

const app = express()

const users = {
    id : 123,
    name : "ABC",
    address : "XYZ street"
}

app.get('/users', (req, res)=>{
    console.log("Request received on /user ! ")
    const user = `<h1> id : ${users.id} </h1>
    <h2>Name : ${users.name}</h2>
    <h2>Address : ${users.address}</h2>`
    res.send(user)
})

app.get('/api/users', (req, res)=>{
    console.log("Request received on /api/users ! ")
    res.json(users)
})

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
})

