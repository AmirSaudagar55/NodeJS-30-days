const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.get('/signup', (req, res)=>{
    res.status(200).render('home')
})

router.post('/signup', async (req, res)=>{
    if(!req.body) res.status(400).json({'message' : 'Something is missing , Signup Failed'})
    const body = req.body;
    const user = await User.create({
        userName : body.userName,
        email : body.email,
        password : body.password,

    })
})


module.exports = router;