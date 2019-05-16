var http=require("http");
var hostname="localhost";
var url=require("url");
var fs=require("fs");
var path=require("path");

var port=3000;
var server=http.createServer((req,res)=>{
  res.setHeader("Content-type","text/html;charset=utf-8");
  // console.log(url.parse(req.url));
  // console.log(req);
  var pathname=url.parse(req.url).pathname;
  // if(pathname=="/index.html")
  // {
  //   fs.readFile(path.join("./",pathname),(err,data)=>{
  //   res.write(data);
  //   res.end();
  //   })

  // }
  // else if(pathname=="/list.html")
  // {
  //   res.write("列表");
  //   res.end();
  // }else{
  //   res.write("404");
  //   res.end();
  // }
  // console.log(pathname)
  if(pathname!=="/favicon.ico"){
    if(/^\/api/.test(pathname))
    {
      console.log(url.parse(req.url,true).query);
      console.log(url.parse(req.url).query);
      // var content="";
      // req.on("data",(chunk)=>{
      //   content+=chunk;
      // })
      // req.on("end",()=>{
      //   console.log(content);
      //   res.end();
      // })
      res.end(url.parse(req.url).query);
    }
    else{
    fs.readFile(path.join("./",pathname),(err,data)=>{
      if(err)
      {
          res.write("404");
          res.end();
      }
      else{
        res.write(data);
        res.end();
      }
      })}
  　}
})
server.listen(port,hostname,()=>{
  console.log("已开启服务");
})