const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ras: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
   price: {
    type: String,
    required: true
  },
  pictures: [{ type: Schema.Types.ObjectId, ref: "picture" }],
  date: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("products", productsSchema);

module.exports = Product;
