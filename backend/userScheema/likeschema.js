var mongoose = require("mongoose");

var likesSchema = new mongoose.Schema(
  {    
    email: [],
    _id:{type:String},
    time: { type: String, default: new Date() },
  },
  { versionKey: false }
);
module.exports = mongoose.model("likes",likesSchema);