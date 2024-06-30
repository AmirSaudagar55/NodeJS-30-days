const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const authPage = require("./middlewares")

app.use(express.json())


app.post("/user", async (req, res)=>{
    const user = req.body
    const salt = await bcrypt.genSalt(10);
    const password = user.password;
    const hashedPassword = await bcrypt.hash(password,salt);
    console.log(hashedPassword);
    console.log(await bcrypt.compare(password,hashedPassword))
    user.password = hashedPassword;
    res.status(201).json({"message" : "User Created Successfully", user})
})


app.get("/marks",authPage(["teacher", "admin"]),(req, res)=>{
    res.status(200).json({
        "Amir" : 100,
        "John" : 80,
        "Tony" : 99
    })
})

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})