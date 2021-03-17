const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  res.status(200).render("register");
});

router.post("/", (req, res, next) => {
  // use .trim() -> takes spaces before and after the text in the field
  const firstName = req.body.firstName.trim();
  const lastName = req.body.lastName.trim();
  const userName = req.body.userName.trim();
  const email = req.body.email.trim();
  // DON'T trim pwd -> user may intend to use space, dont want them having login problems.
  const password = req.body.password;

  const payload = req.body;

  if (firstName && lastName && userName && email && password) {
  } else {
    payload.errorMessage = "Make sure each field has valid value";
    res.status(200).render("register", payload);
  }
});

module.exports = router;
