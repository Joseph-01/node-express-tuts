const express = require("express")
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")

app.use(authorize)

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/authorize", (req, res) => {
    res.send("Authorize")
})

app.listen(5000, () => {
    console.log(`http://localhost:5000`)
})