const express = require('express')
const router = express.Router()
const User = require("../Model")
const { v4 : uuidv4 } = require('uuid')  

router.post('/signup',async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const uid = uuidv4()

    const user = await User.create({
        name : name,
        email : email,
        password : password
    })

    console.log(user)

    if(user)
    {
        res.staus(201).render('home')
    }
    else{
        const err = {
            msg : "Error while creating a user",
            route : "/user/signup",
            controller : "handleCreateUser"
        }
        res.status(500).json({err})
        console.log(err)
    }
})

router.get('/', (req, res)=>{
        res.status(200).render("signup")
})