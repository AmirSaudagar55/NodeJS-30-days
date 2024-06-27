const jwt = require('jsonwebtoken')


function setUser(user)
{
    return jwt.sign({
        email : user.email,
        password : user.password
    }, "S@E$C#R%e&t")  // Secret ket must be in .env file
}

function getUser(token)
{
    if(!token) {
        return null;
    }
    else {
        try {
            return jwt.verify(token, "S@E$C#R%e&t")    
        } catch (error) {
            console.log("Error : ", error)
            return null
        }
        
    }
    
}

module.exports = {
    setUser,
    getUser
}