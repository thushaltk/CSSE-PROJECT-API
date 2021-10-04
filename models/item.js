const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
    itemname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Item", item);