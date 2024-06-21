const express = require('express')
const router = express.Router()
const {User} = require("../Model/userSchema.js")
const {handleCreateUser, handleGetUsers, handleGetUserById, handleUpdateUser, handleDeleteUser} = require("../Controller/user.js")

router.route("/")
    .get(handleGetUsers)
    .post(handleCreateUser)
  
  
router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUser)
    .delete(handleDeleteUser)
    

  module.exports = router;