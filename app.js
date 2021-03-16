const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const middleWare = require("./middleware");

const server = app.listen(PORT, () => {
  console.log(`Server alive on port ${PORT}`);
});

app.set("view engine", "pug");
app.set("views", "views");

// Routes
const loginRoute = require("./routes/loginRoute");

app.use("/login", loginRoute);

app.get("/", middleWare.requireLogin, (req, res, next) => {
  const payload = {
    pageTitle: "Home",
  };
  res.status(200).render("home", payload);
});

app.get("/login", (req, res, next) => {
  res.send("you must login");
});
