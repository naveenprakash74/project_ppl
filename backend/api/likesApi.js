var UserModel = require("../userScheema/likeschema");
module.exports = {
    likes: async function(data,cb) {
        console.log("data in api", data);

        findelement =()=>{UserModel.findOne({_id: data._id},function(err, result) {
            console.log("data result==========",result);  
            cb(null,result);
         })}

         if(data.email==data._id)
         {findelement();}
         else{
        await UserModel.findOne({_id: data._id},function(err, user) {
          if(user==null){
              UserModel.create(data,function(err, user) {
                  console.log("created");
                  findelement();
                // console.log("database vreated then id:",user);
          })}
          else if(user.email.includes(data.email)){
                UserModel.updateOne({_id:data._id},{$pull:{email:data.email}},function(err,res){
                  console.log("data pull");  
                  findelement();
                })
          }
          else{
                UserModel.updateOne({_id:data._id},{$push:{email:data.email}},function(err,res){
                  console.log("data pushed");  
                  findelement();
                });
            }
        })}
}};