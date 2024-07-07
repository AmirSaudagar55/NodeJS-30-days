const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    salt : {
        type : String,
        required : true
    },
    profileImage : {
        type : String
    }
})


userSchema.pre('save', async function(){
    console.log(this);
    const user = this;

})


const User = mongoose.model('user', userSchema)

module.exports = User