//use our task model
const Task = require("../models/TaskModel")
const asyncWrapper = require("../middleware/async")

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
});

const getTaskById = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findById(taskId)
  if (task) {
    return res.status(200).json({ task })
  }
})

const createNewTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  return res.status(201).json({ task })
})



const updateTask = asyncWrapper(async (req, res) => {

  const { id: taskId } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskId },
    req.body,
    {
      new: true,
      runValidators: true
    })
  if (!task) {
    return res.status(404).json({ "msg": `task id ${taskId} not found` })
  }
  res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params
  const task = await Task.findOneAndDelete({ _id: taskId })
  if (!task) {
    return res.status(404).json({ "msg": `task id ${taskId} not found` })
  }
  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask
};
