const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supplier = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  registerDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Supplier", supplier);
