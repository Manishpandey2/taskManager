const taskModel = (sequelize, DataTypes) => {
  const task = sequelize.define("task", {
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    taskStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return task;
};

module.exports = taskModel;
