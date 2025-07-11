const { types } = require("pg");

const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPhoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });
  return User;
};
module.exports = userModel;
