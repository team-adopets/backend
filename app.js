const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
require("./passport")(passport);

const config = require("./config/db");
const { PORT } = require("./config/variabelEnv");
const users = require("./routes/user");
const product = require("./routes/product");
const picture = require("./routes/picture");
const checkout = require("./routes/checkout");

const Port = PORT || 3000;
const app = express();


app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("hello");
});
app.use("/api/users", users);
app.use("/api/product", product);
app.use("/api/pict", picture);
app.use("/api/checkout", checkout)

if (!config) {
  console.log({
    error : error
  });
}else {
  console.log ("success connected to database")
}

app.listen(Port, () => {
  console.log(`Server is running on PORT ${Port}`);
});
