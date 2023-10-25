const {people} = require("./data")



const authorize = function (req, res, next) {
    const {user} = req.query
    const checkPerson = people.find((person) => person.name === String(user))
    if (!checkPerson) {
        return res.status(401).json({success: false, errorMessage: "Unauthorized"})
    }
    return res.json(checkPerson)
    next()
}

module.exports = authorize