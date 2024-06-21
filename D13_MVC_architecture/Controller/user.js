const User = require('../Model/userSchema.js')

async function handleGetUsers(req, res)
{
        const users = await User.find({})
        return res.status(200).json(users)
}

async function handleCreateUser (req, res){
    const newUser = await User.create({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email,
      gender : req.body.gender
    })
    return res.status(201).json({message : "Success"})
}

async function handleGetUserById (req, res) {
    const id = req.params.id;
    const user = await User.findById(id);
    return res.status(200).json(user);
 }

async function handleUpdateUser (req, res){
    
    const toUpdate = req.body
    const id = req.params.id

    try {
    const updatedUser = await User.findByIdAndUpdate(id, toUpdate, {new : true})
    console.log(`User Updated Successfully \n`)
    console.log(updatedUser)

    return res.status(200).send("Updated Successfully")
    } catch (error) {
    console.log(error)
    return res.status(500).send("Update Failed")
    }
    
}

async function handleDeleteUser (req, res){
    const id = req.params.id

    const user = await User.findByIdAndDelete(id)
    
    if (user) {
    console.log("Deleted Successfully");
    return res.status(200).send("User Deleted");
    } else {
    
    return res.status(200).send("User not found");
    }
}

module.exports = {
    handleGetUsers,
    handleCreateUser,
    handleGetUserById,
    handleUpdateUser,
    handleDeleteUser
}
