var mongoose = require("mongoose");

var imageSchema = new mongoose.Schema(
  {    
    email: { type: String},
    caption: { type:String },
    image:{type:String},
    category:{type:String},
    name:{type:String},
    time: { type: String, default: new Date() },
  },
  { versionKey: false }
);
module.exports = mongoose.model("imageDetails",imageSchema);