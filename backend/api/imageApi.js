var UserModel = require("../userScheema/imageScheema");
module.exports = {
  imageUpload: async function(data,cb) {
    // console.log("data in api", data);
    // let formEmail=data.email;
    // let varifiyEmail;
    UserModel.create(data, function(err, result){
            if (err) {
              console.log("in err", err);
              cb(err,null);
            } else {
              // console.log("result in api", result);
              cb(null,result);
            }
    });
   
  },
  getimage: async function(data,cb) {
    // console.log("data in api", data);
    if(data.id==1){
       UserModel.find({},function(err, user) {
        // console.log("database matched then id:",user);
        if (err) {cb(err,null)}
        else {cb(null,user.reverse())};
      });
    }else{
     UserModel.findOne({_id: data.id} ,function(err, user) {
        // console.log("database matched then id:",user);
        if (err) {cb(err,null)}
        else {cb(null,user)};
      });}
  }
};