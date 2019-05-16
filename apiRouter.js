var express=require("express");
var router=express.Router();

router.get("/login",(req,res)=>{
  res.send("登录");
})


module.exports=router;