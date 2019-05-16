var https=require("https");
var cheerio=require("cheerio");

// https.get("https://www.taobao.com",(res)=>{
//   var content="";
//   res.on("data",(chunk)=>{
//     content+=chunk;
//   })
//   res.on("end",()=>{
//     // console.log(content);
//     findMenu(content);
//   })
// })
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





function findMenu(html){
  var $=cheerio.load(html);
  var li=$(".J_Cat");
  var p=$(".service-panel");
  li.each((i,item)=>{
    console.log($(item).find("a").text());
  })
}