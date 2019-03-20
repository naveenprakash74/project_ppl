var UserModel = require("../userScheema/catagorySchema");
module.exports = {
    addCatagory: async function(data,cb) {
        console.log("data in api", data);
         findcatagory=()=>{
            UserModel.findOne({_id:data._id},function(err,result){
            cb(null,result);
        })}
        if(data.id==1){findcatagory();}else{
            await UserModel.findOne({_id:data._id,catagory:data.catagory},function(err, user) {
                // console.log("database matched then id--------------------------------:",user);
                if(user==null){
                    UserModel.updateOne({_id:data._id},{$push:{catagory:data.catagory}},{upsert:true},function(err,result){
                        findcatagory();
                    })
                }else{findcatagory();}
              });        
    }}
  };