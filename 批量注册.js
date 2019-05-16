var https=require("https");
var cheerio=require("cheerio");

var option={
  method:"post",
  hostname:"api.douban.com",
  path:"/v2/movie/top250"
}
var request=https.request(option,(res)=>{
  var content="";
  res.on("data",(chunk)=>{
    content+=chunk;
  })
  res.on("end",()=>{
    var list=[];
    JSON.parse(content).subjects.forEach(element => {
      list.push(element.title);
    });
    console.log(list)
    // findMenu(content);
  })
})

request.end();