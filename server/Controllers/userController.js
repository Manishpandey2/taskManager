const { user } = require("../database/connection");

exports.fetchUser = async (req, res) => {
  const userData = await user.findAll();
  if (userData.length == 0) {
    return res.json({
      message: "There is no users yet",
    });
  }
  res.json({ Message: "All the user Fetched successfully", userData });
};

exports.fetchSingleUser = async (req, res) => {
  const id = req.params.id;
  const singleUser = await user.findByPk(id);
  res.json({
    message: "Single user fetched successfully",
    singleUser,
  });
};

exports.addUser = async (req, res) => {
  const { userName, userEmail, userPhoneNumber, userPassword } = req.body;
  if (!userName || !userEmail || !userPhoneNumber || !userPassword) {
    return res.json({
      message: "Each fields are required",
    });
  }
  await user.create({
    userName,
    userEmail,
    userPhoneNumber,
    userPassword,
  });
  res.json({
    message: "User Added successfully",
  });
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { userName, userEmail, userPhoneNumber, userPassword } = req.body;
  await user.update(
    {
      userName,
      userEmail,
      userPhoneNumber,
      userPassword,
    },
    {
      where: {
        id,
      },
    }
  );
  res.json({
    message: "User updated successfully",
  });
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  await user.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "User deleted successfully",
  });
};
