var express = require("express");
var app = express();
var router = require("./route/route");
let ejs = require('ejs');


//requiere bodyu parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
 
app.set('view engine', 'ejs');
var cors = require('cors');
app.use(cors());

//initilize mongoose for mongodb connection
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ppldb", {
  useNewUrlParser: true} , () => {
    console.log("DB is connected")
});

app.use("/", router);
//starting server
app.listen(3001,()=>{
    console.log("server is running on port no. 3001");
})