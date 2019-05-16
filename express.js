var express=require("express");
var app=express();

app.use("/niubi",express.static("."));

app.get("/api",(req,res)=>{
  res.send("hello express啊啊");//发送并结束
})

app.get("/index",(req,res)=>{
  res.send("index");//发送并结束
})

app.get(/go/,(req,res)=>{
  res.send("gogogogo");//发送并结束
})

app.post("/up",(req,res)=>{
  res.send("upupup");//发送并结束
})

app.route("movie").get((req,res)=>{

}).post((req,res)=>{

})

app.use((req,res)=>{
  res.redirect("/index")
});

app.listen(3000,"localhost",(err)=>{

  if(err)
  {

  }
  else{
    console.log("开启");
  }
})