
const connectDb = require("./config/db")
const express = require("express");
const app = express();
const tasks = require("./routes/task");
const { urlencoded } = require("express");
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler")
require("dotenv").config()



app.use(express.static("public"))
//middlewarethat returns json data
app.use(express.json());

//use api router
app.use("/api/v1/tasks", tasks);
app.use(notFound)
app.use(errorHandler)

//use the start dbconnection to start connection
const port = process.env.PORT || 3000
connectDb.startConnection(app.listen(port, () => {
    console.log(`http://localhost:${port}`)
}))

