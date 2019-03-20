var express = require("express");
var router = express.Router();
var SignUp = require("../api/signUp");
var Login = require("../api/loginApi");
var Image = require("../api/imageApi");
var Comment=require("../api/commentApi")
var Likes =require('../api/likesApi');
var Catagory =require('../api/catagoryApi');

router.use(express.static('route/uploads'));
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/uploads/')
  },
  filename: function (req, file, cb) {
    imageName=file.fieldname + '-' + Date.now()+'.png';
    cb(null, imageName)
  }
})

const upload = multer({
    storage: storage
 });



router.get('/index',function(req,res){
    res.render('index');
});


router.post("/signup", async function(req, res) {
    // console.log("this is the image coming form frontend", req.body);
    await SignUp.adduser(req.body,function (error, user){
    if (error) {
        // console.log("result frontend error---",error);
        res.send("this email is allready exist");
      }
    else{
        // console.log("result frontend result---",user);
        res.send("you are successfully registered Please go for login ");
        }
      }); 
});
router.post("/login", async function(req, res) {
    // console.log("this is the data coming form frontend", req.body);
  
    await Login.loginuser(req.body,function (error,psw, user){
    if (error) {
        // console.log("result frontend error---",error);
        // res.render("index",{errorl:"This email is not registered"}) //This email is not registered
        res.send(error);
      }
    else if(user){
        // console.log("result frontend result---",user);
        // res.render('memory',{avatar:user[0],name:user[1]});
        res.send(user);
        }
    else if(psw){
      console.log("result frontend error---",error);
        // res.render("index",{errorl:"wrong password"});
        res.send(psw);
    }
      }); 
});


router.post("/image",upload.single("myImage"), async function(req, res) {
  let data=JSON.parse(req.body.data);
  data.image = req.file.filename;
  // console.log("this is the image coming form frontend", req);
  // console.log("this is the image coming form frontend",data);
  await Image.imageUpload(data,function (error, user){
  if (error) {
      // console.log("result frontend error---",error);
      res.send("this email is allready exist");
    }
  else{
      // console.log("result frontend result---",user);
      res.send(user);
      }
    }); 
});

router.post("/getimage",upload.single("myImage"), async function(req, res) {
  // console.log("this is the image coming form frontend", req.body.id);
  // console.log("this is the image coming form frontend",data);
  await Image.getimage(req.body,function (error, user){
  if (error) {
      // console.log("result frontend error---",error);
      res.send("this id is not valid");
    }
  else{
      // console.log("result frontend result---",user);
      res.send(user);
      }
    }); 
});

router.post("/comment", async function(req, res) {
  // console.log("this is the image coming form frontend", req.body);
  // console.log("this is the image coming form frontend",data);
  await Comment.comment(req.body,function (error, user){
  if (error) {
      // console.log("result frontend error---",error);
      res.send("this id is not valid");
    }
  else{
      // console.log("result frontend result---",user);
      res.send(user);
      }
    }); 
});
router.post("/getcomment", async function(req, res) {
  // console.log("this is the image coming form frontend", req.body);
  // console.log("this is the image coming form frontend",data);
  await Comment.getComment(req.body,function (error, user){
  if (error) {
      // console.log("result frontend error---",error);
      res.send("this id is not valid");
    }
  else{
      // console.log("result frontend result---",user);
      res.send(user);
      }
    }); 
});
router.post("/reply", async function(req, res) {
  // console.log("this is the image coming form frontend", req.body);
  // console.log("this is the image coming form frontend",data);
  await Comment.replyComment(req.body,function (error, user){
  if (error) {
      // console.log("result frontend error---",error);
      res.send("this id is not valid");
    }
  else{
      // console.log("result frontend result---",user);
      res.send(user);
      }
    }); 
});


router.post("/likes", async function(req, res) {

  await Likes.likes(req.body,function (error, user){
  if (error) {
      res.send("this id is not valid");
    }
  else{
      console.log("result frontend result---",user);
      res.send(user);
      }
    }); 
});

router.post("/catagory", async function(req, res) {

  await Catagory.addCatagory(req.body,function (error, user){
  if (error) {
      res.send("this id is not valid");
    }
  else{
      console.log("result frontend result---",user);
      res.send(user);
      }
    }); 
});

module.exports = router;