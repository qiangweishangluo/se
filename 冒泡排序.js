var arr=[5,3,1,5,7,8,9,0];
for(var i=0;i<arr.length;i++)
{
  for(var j=0;j<arr.length-i;j++)
  {
    toCompare(j,j+1);
  }
}
function toCompare(a,b){
  var c;
  if(arr[a]>arr[b]){
    [arr[a],arr[b]]=[arr[b],arr[a]];
  }
}
console.log(arr);