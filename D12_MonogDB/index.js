const { urlencoded } = require("express");
const express = require("express");
const fs = require("fs");
const _ = require("lodash");
const mongoose = require('mongoose')
const data = require("./MOCK_DATA.json");

const app = express();

// "first_name": "Amir",
//     "last_name": "Saudagar",
//     "email": "saudagaramir55@gmail.com",
//     "gender": "Male",
//     "job_title": "SDE"

const userSchema = new mongoose.Schema ({
  first_name : {
    type : String,
    required : true
  },
  last_name : {
    type : String
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  gender : {
    type : String
  },
  job_title : {
    type : String
  }

}, {timestamps : true})

const User = mongoose.model("user", userSchema);



app.use(express.urlencoded({ extended: false }));

app.get("/users", async (req, res) => {
  const users = await User.find({})

  const html = `<ul>
        ${users
          .map(
            (user) =>
              `<li>
                ${user.first_name}
            </li>`
          )
          .join("")}
    </ul>`;

  res.send(html);
});

app.post("/api/users",async (req, res)=>{
  const newUser = await User.create({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    gender : req.body.gender
  })
  res.status(201).json({message : "Success"})
})

app.patch("/api/users/:id", async (req, res)=>{
  
  const toUpdate = JSON.stringify(req.body) 
  const id = req.params.id

  try {
    const updatedUser = await User.findByIdAndUpdate(id, toUpdate, {new : true})
    console.log(`User Updated Successfully \n`)
    console.log(updatedUser)

    res.status(200).send("Updated Successfully")
  } catch (error) {
    console.log(error)
    res.status(500).send("Update Failed")
  }
  
})

app.delete("/api/users/:id", async (req, res)=>{
  const id = req.params.id

  const user = await User.findByIdAndDelete(id)
  
  if (user) {
    console.log("Deleted Successfully");
    res.status(200).send("User Deleted");
  } else {
    
    res.status(200).send("User not found");
  }
})

app.get(`/api/users/:id`, (req, res) => {
  const id = req.params.id;
  const user = User.findById(id);
  res.status(200).json(user);
});

app.listen(8000, () => {
  console.log("Server is listening on PORT 8000");
  mongoose.connect("Connection String")
  .then(()=>{

  })
  .catch(error => {

  })
});
