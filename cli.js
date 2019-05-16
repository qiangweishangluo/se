var fs=require("fs");
var path=require("path");
var project = [{
  name:"project",
  type:"dir",
  children:[
    {
      name:"img",
      type:"dir"
    },
    {
      name:"js",
      type:"dir",
      children:[
        {
          name:"a.js",
          type:"file",
          content:`var a=0;`
        },
        {
          name:"b.js",
          type:"file",
          content:`var b=0;`
        }
      ]
    },
    {
      name:"css",
      type:"dir"
    },
    {
      name:"index.html",
      type:"file",
      content:`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        
      </body>
      </html>`
    }
  ]
}]


//注意 需要同步去做  Sync
function createPro(parentPath,proData){
    proData.forEach((item)=>{
      //只有文件夹有子集
        if(item.type=="dir")
        {
          //将父文件夹存起来
          var pPath=path.join(parentPath,item.name);
          fs.mkdirSync(pPath,(err)=>{});
          if(item.hasOwnProperty("children"))
          {
            createPro(pPath,item.children);
          }
        }
        else if(item.type=="file")
        {
          // console.log(parentPath,item.name);
          fs.writeFileSync(path.join(parentPath,item.name),item.content,(err)=>{})
        }
        // return;
    })
}

function concatPro(proData){
  // var rootPath=path.join(proData.name,"js");
  var content="";
  var rootPath=process.argv[2]||"project/js";
  var dirName=process.argv[3]||"dist";
  var fileName=process.argv[4]||"all.js";
  console.log(rootPath);
  var dirlist=fs.readdirSync(rootPath,(err)=>{})
    dirlist.forEach((item)=>{
      
      content+=fs.readFileSync(path.join(rootPath,item),(err,data)=>{});
      console.log(content);
  });
  fs.mkdirSync(path.join(rootPath,"../"+dirName),()=>{});
  fs.writeFileSync(path.join(rootPath,"../"+dirName+"/"+fileName),content,()=>{});
}

function rmPro(target){
  let arr=fs.readdirSync(target,()=>{});
  let length=arr.length;
  //判断是否是空文件夹
  if(length)
  {
    //循环文件
    arr.forEach((item,index)=>{
      //获取文件类型
      var type=fs.statSync(target+"/"+item);
        //判断是否是文件夹
        if(type.isDirectory())
        {
          //如果是文件夹就去递归
          rmPro(target+"/"+item);
        }
        else{
          //如果是文件就删除
          fs.unlinkSync(target+"/"+item,()=>{});
        }
          // 如果是最后一个,就把父文件夹给删了兄弟
        if(index==length-1)
        {
          rmPro(target);
        }
      
    })
  }
  else{
    fs.rmdirSync(target,()=>{});
  }
}
  
// rmPro("project");     //删除项目
// createPro("",project);//创建项目
if(fs.readdirSync("./",()=>{}).indexOf("project")!="-1")
{
  
  rmPro("project");     //删除项目
  createPro("",project);//创建项目
  concatPro(project);   //concat两个js文件
}
else{
  createPro("",project);
  concatPro(project);
}