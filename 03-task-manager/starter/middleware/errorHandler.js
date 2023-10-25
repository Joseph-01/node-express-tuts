const { CustomAPIError } = require("../errors/custom-error")

const errorHandlerMiddleware = (err, req, res, next) => {
    //check if error is an instance of our error class, if yes
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    //if no, return this
    res.status(500).json({ msg: "Something went wrong" })
}

module.exports = errorHandlerMiddleware