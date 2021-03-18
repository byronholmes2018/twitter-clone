const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const middleWare = require("./middleware");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("./database");
const server = app.listen(PORT, () => {
  console.log(`Server alive on port ${PORT}`);
});
const session = require("express-session");

require("dotenv").config();
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);

// Routes
const loginRoute = require("./routes/loginRoute");
const registerRoute = require("./routes/registerRoute");

app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.get("/", middleWare.requireLogin, (req, res, next) => {
  const payload = {
    pageTitle: "Home",
  };
  res.status(200).render("home", payload);
});

app.get("/login", (req, res, next) => {
  res.send("you must login");
});
