const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server alive on port ${PORT}`);
});

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.status(200).render("home");
});
