var UserModel = require("../userScheema/userScheema");
module.exports = {
  adduser: async function(data,cb) {
    console.log("data in api", data);
    let formEmail=data.email;
    let varifiyEmail;
    await UserModel.findOne({email: formEmail},'id' ,function(err, user) {
      console.log("database matched then id:",user);
      if (err) return err;
      else {varifiyEmail=user;}
    });
    if (varifiyEmail){
      console.log("already exists");
      cb("already exists",null);
    }
    else { 
      console.log("not exists");
      UserModel.create(data, function(err, result) {
        if (err) {
          console.log("in err", err);
          cb(err,null);
        } else {
          console.log("result in api", result);
          cb(null,result);
        }
      });            
    }
  }
};