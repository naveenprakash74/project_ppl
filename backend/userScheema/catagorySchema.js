var mongoose = require("mongoose");

var catagorySchema = new mongoose.Schema(
  { _id:{type:String},
    catagory: [],
    },
  { versionKey: false }
);
module.exports = mongoose.model("catagory",catagorySchema);