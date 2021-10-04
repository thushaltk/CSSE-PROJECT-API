const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseOrder = new Schema({
  sitename: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sitemanager: {
    type: String,
    required: true,
  },
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  total: {
    type: Number,
    required: true,
    default: 0
}
});

module.exports = mongoose.model("PurchaseOrder", PurchaseOrder);
