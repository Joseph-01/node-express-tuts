const mongoose = require("mongoose")
require("dotenv").config()

//connection to database
const connectDB = (conectionUrl) => {
    mongoose.connect(conectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }).then(() => console.log("connecting")).catch((err) => console.log(err))
}

//checking the connection and starting it
const startConnection = async (listen) => {
    try {
        await connectDB(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)

    }
}

module.exports = {
    startConnection
}

