var express=require("express");
var router=express.Router();

router.get("/index",(req,res)=>{
  var date=new Date();
  date.setDate(date.getDate()+5);
  

  // res.cookie("username","zhaodongfang",{"expires":date,"httpOnly":true});
  
  console.log(req.cookies);

  res.clearCookie("username");


  res.send("首页");
})

router.get("/list",(req,res)=>{
  res.send("列表页");
})


module.exports=router;