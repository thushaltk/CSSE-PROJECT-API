//Contains mongodb connection details
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://thushaltk:thushal1234@cluster0.tivsh.mongodb.net/csse?retryWrites=true&w=majority")
  .catch((error) => {
    console.log("Connection error", error.message);
  });

const db = mongoose.connection;

module.exports = db;
