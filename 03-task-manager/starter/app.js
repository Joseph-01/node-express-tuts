require("./config/db")
const express = require("express")
const app = express()
const tasks = require("./routes/task")

//middleware
app.use(express.json())
// routes
app.get("/hello", function(req, res){
    res.send("Hello world")
})


app.use("/api/v1/tasks", tasks)

const port = 3000
app.listen(port, console.log(`http://localhost:${port}`))