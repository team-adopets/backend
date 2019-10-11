const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var pictureSchema = new Schema(
  {
    link: { 
        type: String,
        require: true 
         },
    date: {
         type: Date,
         default: Date.now
    }
  }
);

const Picture = mongoose.model("picture", pictureSchema);
module.exports = Picture;
