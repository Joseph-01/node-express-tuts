const logger = function (req, res, next) {
    const method = req.method
    const url = req.url
    const status = req.status
    console.log(method, url, status)
    next()
}

module.exports = logger