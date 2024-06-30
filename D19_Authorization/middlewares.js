
const authPage = (accessRoles)=>{
    return (req, res, next)=>{
        const userRole = req.body.role;
        if(accessRoles.includes(userRole)){
            next()
        }
        else{
            res.status(400).json( {"message" : "You are unauthorized to access this page."})
        }
    }
}

module.exports = authPage;