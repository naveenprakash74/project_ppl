var UserModel = require("../userScheema/userScheema");
module.exports = {
    loginuser: async function(data,cb) {
        console.log("data in api", data);
        let formEmail=data.email;
        let formPassword=data.psw;
        let varifiyEmail,getUser;
    
        await UserModel.findOne({email: formEmail},function(err, user) {
          console.log("database matched then id:",user);
          if (err) return err;
          else {
            varifiyEmail=user;
            if(varifiyEmail!=null){
            if(user.psw==formPassword){
              varifiyEmail="ok";
              getUser=user;
            }
            else{varifiyEmail="Wrong psw";} }       
        }});
    
        if (varifiyEmail=="ok"){
          console.log("Email varified");
          cb(null,null,getUser);
        }else if(varifiyEmail=="Wrong psw"){
          console.log("wrong psw");
          cb(null,"Wrong psw",null);  
        }
        else{
          cb("not registerd",null,null);
        }
      }
};