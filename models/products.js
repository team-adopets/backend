const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("users", productsSchema);

module.exports = Product;