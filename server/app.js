const express = require("express");
const app = express();
require("./database/connection");

app.use(express.json());
app.use("/user", require("./Routes/userRoute"));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
