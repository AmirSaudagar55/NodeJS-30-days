// GET /users - List all users
// GET /users/1 - Get the user with ID 1
// GET /users/2 - Get the user with ID 2

// POST /users - Create new user

// PATCH /users/1 - Edit the user with ID 1
// DELETE /users/1 - Delete the user with ID 1

const { urlencoded } = require("express");
const express = require("express");
const fs = require("fs");
const _ = require("lodash");
const data = require("./MOCK_DATA.json");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
  const users = data;

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

app.get(`/users/:id`, (req, res) => {
  //to specify dynamic parameter we use ':variable_name'
  const id = req.params.id;
  const user = data.find((user) => user.id == id);
  const html = `<h1>${user.first_name}</h1>`;
  res.send(html);
});

// ---------------------------------------------------------------------------------------------

app.get(`/api/users`, (req, res) => {
  res.json(data);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  const newUser = { id: data.length + 1, ...body };

  // if(data.find(user => user === JSON.stringify(newUser))){      // https://www.freecodecamp.org/news/javascript-comparison-operators-how-to-compare-objects-for-equality-in-js/#:~:text=How%20to%20Compare%20Objects%20Using%20The%20JSON.stringify()%20Function%20in%20JavaScript
  //     console.log("USER FOUND ")
  // }

  if (
    data.find((user) => {
      let omitUser1 = _.omit(user, "id");
      let omitUser2 = _.omit(newUser, "id");
      if (_.isEqual(omitUser1, omitUser2)) {
        console.log("found !!!")
        return true;
      }
    })
  ) 
  {
    res.end("User Already exists");
  } 
  else {
    data.push(newUser);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, data) => {
      if (err) console.log(err);
      else res.end(`Successful\n ID : ${newUser.id}`);
    });
  }
});


app.patch("/api/users/:id", (req, res)=>{
  
  const toUpdate = JSON.stringify(req.body) 
  console.log(toUpdate)

  const id = req.params.id
  console.log(id)

  const user = data.find((item) => id == item.id)

  try {
    console.log(user)
    user.first_name = toUpdate.first_name
    user.last_name = toUpdate.last_name
    user.gender = toUpdate.gender

    console.log(`User Updated Successfully \n`)
    console.log(user)

    res.end("Updated Successfully")
  } catch (error) {
    console.log(error)
    res.end("Update Failed")
  }
  
})

app.delete("/api/users/:id", (req, res)=>{
  const id = req.params.id

  const index = data.findIndex(user => user.id == id);

  
  if (index !== -1) {
    data.splice(index, 1);
    console.log("Deleted Successfully");
    res.end("Deleted successfully");
  } else {
    
    res.send("User not found");
  }
})

app.get(`/api/users/:id`, (req, res) => {
  const id = req.params.id;
  const user = data.find((user) => user.id == id);
  res.json(user);
});

app.listen(8000, () => {
  console.log("Server is listening on PORT 8000");
});
