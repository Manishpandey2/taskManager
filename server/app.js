const express = require("express");
const app = express();
require("./database/connection");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/user", require("./Routes/userRoute"));
app.use("/task", require("./Routes/taskRoute"));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
