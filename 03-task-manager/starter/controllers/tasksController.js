// const res = require("express/lib/response");

const getAllTasks = (req, res) => {
  res.send("all items");
};

const getTaskById = (req, res) => {
  res.send("id items");
}

const createNewTask = (req, res) => {

  // res.json({"hello":"create task 201"})
  res.send(req.body)
}



const updateTask = (req, res) => {
  res.json({ "hello": "update task 200" })
}

const deleteTask = (req, res) => {
  res.send("dalete an item");
}

module.exports = {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask
};
