const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignedSuppliers = new Schema({
  purchaseOrderID: {
    type: Schema.Types.ObjectId,
    ref: 'PurchaseOrder'
  },
  itemname: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  quantity: {
    type: Number,
    required: true,
  },
  supplier: [
    {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
    },
  ],
  deadline: {
      type: String,
      required: true
  },
  budget:{
      type: Number,
      required: true,
      default: 0
  }
});

module.exports = mongoose.model("AssignedSuppliers", assignedSuppliers);
