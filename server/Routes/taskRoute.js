const {
  fetchAllTask,
  addTask,
  fetchSingleTask,
  updateTask,
  deleteTask,
} = require("../Controllers/taskController");

const router = require("express").Router();

router.route("/").get(fetchAllTask).post(addTask);
router.route("/:id").get(fetchSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
