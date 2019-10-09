const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config/db");
const users = require("./routes/user");
const cors = require("cors");


mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

const app = express();
app.use(passport.initialize());
require("./passport")(passport);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
  res.send("hello");
});
app.use("/api/users", users);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
