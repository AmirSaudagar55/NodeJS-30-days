const userRecord = new Map()

function setUser(id, user)
{
    userRecord.set(id, user)
}

function getUser(id)
{
    return userRecord.get(id)
}

module.exports = {
    serUser,
    getUser
}