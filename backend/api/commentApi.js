var UserModel = require("../userScheema/commentScheema");
module.exports = {
    getComment: async function(data,cb) {
        // console.log("data in api", data);
             UserModel.findOne({_id:data.id},function(err, user) {
                // console.log("database matched then id--------------------------------:",user);
                if (err) {cb(err,null)}
                else {cb(null,user)};
              });        
    },
  comment: async function(data,cb) {
    // console.log("data in api", data);
     UserModel.updateOne({_id:data._id},{$push:{comments:data}},{upsert:true}, function(err, result) {
        if (err) {
          console.log("in err", err);
          cb(err,null);
        } else {
          // console.log("result in api", result);
          cb(null,result);
        }
      });            
    },

    replyComment: async function(data,cb) {
        // console.log("data in api", data);
    
        UserModel.updateOne({_id:data._id,'comments.comment':data.comment},{$push:{'comments.$.reply':data}}, function(err, result) {
            if (err) {
              console.log("in err", err);
              cb(err,null);
            } else {
              // console.log("result in api", result);
              cb(null,result);
            }
          }
          );
        }
  };