/* The require mongoose call below returns a singleton object, meaning that the first time
require("mongoose") is called, it creates an instance of the Mongoose class and returns it. On 
subsequent calls, it will return the same instance that was created and returned the first time
because how module import/export works in ES6 */
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
require("dotenv").config();
class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(
        `mongodb+srv://admin:${process.env.DB_PWD}@cluster0.5irkk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
      )
      .then((data) => {
        console.log("database connection successful" + data);
      })
      .catch((err) => {
        console.log("database connection error " + err);
      });
  }
}
module.exports = new Database();
