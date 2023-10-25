const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").patch(updateTask).get(getTaskById).delete(deleteTask);

module.exports = router;
