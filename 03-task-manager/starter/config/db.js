const mongoose = require("mongoose");

const uri =
  "mongodb+srv://node-express-tuts:joseph123@node-express-tuts.1zmxw.mongodb.net/03-task-manager?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("connected todatabase"))
  .catch((err) => console.log(err));
