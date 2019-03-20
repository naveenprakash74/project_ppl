var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    fname: { type: String },
    nname: { type: String }, 
    lname: { type: String },    
    email: { type: String},
    psw: { type: String },
    userName:{type:String}
  },
  { versionKey: false }
);
module.exports = mongoose.model("userDetails",userSchema);