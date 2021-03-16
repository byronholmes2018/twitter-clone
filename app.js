const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server alive on port ${PORT}`);
});

app.get("/", (req, res, next) => {
  res.status(200).send("Yahoo!");
});
