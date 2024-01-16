const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

var auth = {
  token: "XypJK12PPQst",
  username: "admin",
  password: "admin",
  confirmpassword: "admin",
};

app.use("/login", (req, res) => {
  res.send(auth);
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
