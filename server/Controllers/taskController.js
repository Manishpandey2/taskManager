const { task } = require("../database/connection");

exports.fetchAllTask = async (req, res) => {
  const Task = await task.findAll();
  if (Task.length == 0) {
    return res.json({
      message: "There is  no task yet, please add task first",
    });
  }
  res.json({
    message: "All task fetchecd successfully",
    Task,
  });
};
exports.fetchSingleTask = async (req, res) => {
  const id = req.params.id;
  const Task = await task.findByPk(id);
  if (!Task) {
    return res.json({
      message: "Empty",
    });
  }
  res.json({
    message: "Single task fetched successfully",
    Task,
  });
};
exports.addTask = async (req, res) => {
  const { taskName, taskDescription, taskStatus } = req.body;
  console.log(req.body);
  if (!taskName || !taskDescription || !taskStatus) {
    return res.json({
      message: "All fields are required",
    });
  }
  await task.create({
    taskName,
    taskDescription,
    taskStatus,
  });
  res.json({
    message: "Task addeded successfully",
  });
};
exports.updateTask = async (req, res) => {
  const id = req.params.id;
  const { taskName, taskDescription, taskStatus } = req.body;
  await task.update(
    {
      taskName,
      taskDescription,
      taskStatus,
    },
    {
      where: {
        id,
      },
    }
  );
  res.json({
    message: "Task updated successfully",
  });
};
exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  await task.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Task deleted successfully",
  });
};
