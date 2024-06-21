const { urlencoded } = require("express");
const express = require("express");
const app = express();
const mongoose = require('mongoose');

const userRouter = require('./Routes/user.js')
const {logRequest} = require("./Middlewares/middlewares.js")


mongoose.connect("Connection String")
  .then(()=>{
    console.log("! MongoDB connected")
  })
  .catch(error => {
    console.log("!! MongoDB Connection Failed ",error)
  })

app.use(express.urlencoded({ extended: false }));
app.use(logRequest())


app.use("/users", userRouter)

app.listen(8000, () => {
  console.log("Server is listening on PORT 8000");
});
