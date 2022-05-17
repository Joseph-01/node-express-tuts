const connectDb = require("./config/db")
const express = require("express");
const app = express();
const tasks = require("./routes/task");


//middlewarethat returns json data
app.use(express.json());

// routes
app.get("/hello", function (req, res) {
    res.send("Hello world");
});

//use api router
app.use("/api/v1/tasks", tasks);

//use the start dbconnection to start connection
const port = 3000
connectDb.startConnection(app.listen(port, () => {
    console.log(`http://localhost:${port}`)
}))


