const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/view", function (req, res) {
  var name = req.body.name;
  var rollno = req.body.rollno;
  var department = req.body.department;
  res.send(
    "Name: " +
      name +
      "<br>Roll Number: " +
      rollno +
      "<br>Department: " +
      department,
  );
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
