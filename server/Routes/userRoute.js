const {
  fetchUser,
  addUser,
  fetchSingleUser,
  updateUser,
  deleteUser,
} = require("../Controllers/userController");

const router = require("express").Router();

router.route("/").get(fetchUser).post(addUser);
router.route("/:id").get(fetchSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
