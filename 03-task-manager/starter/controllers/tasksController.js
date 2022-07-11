//use our task model
const Task = require("../models/TaskModel")

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
};

const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId)
    if (task) {
      return res.status(200).json({ task })
    }
  } catch (error) {
    return res.status(500).json({ "msg": error })
  }
}

const createNewTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    return res.status(201).json({ task })
  } catch (error) {
    return res.status(500).json({ "msg": error })
  }
}



const updateTask = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({ "msg": error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
      return res.status(404).json({ "msg": `task id ${taskId} not found` })
    }
    res.status(200).json({ task })
  } catch (error) {
    return res.status(500).json({ "msg": error })

  }
}

module.exports = {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask
};
