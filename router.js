var express=require("express");
var app=express();
var pageRouter=require("./pageRouter");
var apiRouter=require("./apiRouter");
var cookie=require("cookie-parser");

app.use(cookie());

app.use("/",pageRouter);
app.use("/api",apiRouter);

app.use((req,res)=>{
  res.redirect("/index");
})

app.listen(3000,"localhost",(err)=>{
if(err)
{

}
else{
  console.log("开启")
}
})