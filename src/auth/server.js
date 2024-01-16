const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

var authToken = {
  token: "test123",
  username: "admin",
  password: "admin",
};

app.use("/login", (req, res) => {
  res.send(authToken);
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
