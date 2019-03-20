var mongoose = require("mongoose");
var commentSchema = new mongoose.Schema(
  {    
    _id:{type:String},
    comments:[{
      user_id:{type:String}, 
      comment:{type:String},
      name:{type:String},
      time: { type: String, default: new Date()},
      reply:[{
        ruser_id:{type:String},
        rcomment:{type:String},
        rname:{type:String}, 
        time: { type: String, default: new Date()}}]
    }]
  },
  { versionKey: false }
);

module.exports = mongoose.model("comment",commentSchema);