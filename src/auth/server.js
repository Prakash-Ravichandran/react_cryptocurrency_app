const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

var token = {
  authToken: "test123",
};

app.use("/login", (req, res) => {
  res.send(token);
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
