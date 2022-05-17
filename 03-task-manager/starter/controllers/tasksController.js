//use our task model
const Task = require("../models/TaskModel")

const getAllTasks = (req, res) => {
  res.send("all items");
};

const getTaskById = (req, res) => {
  res.send("id items");
}

const createNewTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({task})
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
