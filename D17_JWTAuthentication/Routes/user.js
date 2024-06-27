const express = require('express')
const router = express.Router()
const User = require("../Model/User")
const jwt = require('jsonwebtoken');
const { v4 : uuidv4 } = require('uuid')  

const {setUser, getUser} = require('../Services/services.js')

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
        res.status(201).redirect('/user/login')
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

router.post('/login',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const uid = uuidv4()
    const user = await User.findOne({
        email : email,
        password : password
    })

    console.log(user)

    if(user)
    {
        const token = setUser(user)
        res.cookie("token", token)
        res.status(201).render('home')
    }
    else{
        const err = {
            msg : "Error while Finding a user",
            route : "/user/login",
            controller : "handleLoginUser"
        }
        res.status(400).redirect("/user/")
        console.log(err)
    }
})

router.get('/', (req, res)=>{
        res.status(200).render("signup")
})
router.get('/login', (req, res)=>{
        res.status(200).render("login")
})
router.get('/allUser', async(reqw, res)=>{
    const allUsers = await User.find({})
    res.json(allUsers)
})

module.exports = router;