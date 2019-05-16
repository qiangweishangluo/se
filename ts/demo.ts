let foo:number=123;
let str:string="123";
let boo:boolean=true;
let obj:object=[];
let arr:number[]=[1,2,3];
let arr2:string[]=["1","2"];
let arr3:(number|string|boolean)[]=[1,2,"3",true];
let arr4:Array<number|string>=[1,2,3,"13"];
let arr5:[string,number]=['1',2];

let a:any=123;
a="123";
let b:void=null;
let n:null=undefined;
let u:undefined=null;

function fun0(n1:number,n2:number):string{
  return ""
}
fun0(1,2);
var fun2=function():void{
}
var fun3=function(n1:number,n2?:number):void{
}
fun3(1);

class Fun4{
  // private x;
  public x;
  public y;
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  add(){
    return this.x+this.y;
  }
}
class Fun44 extends Fun4{
  z;
  constructor(x,y,z){
    super(x,y);
  }
  sum(){
    return this.x+this.y+this.z;
  }
}
var f1=new Fun4(1,2);
console.log(f1.add());

interface Iperson{
  username,
  name
}

function fun6(person){

}
var person:Iperson={username:"hello",name:"abc"};
fun6(person);

class Fun7 implements Iperson{
  username;
  name;

}

function fun7<t>(n:t):t{
  return n;
}

fun7<string>("str");

namespace QF{
  export function fun(){

  }
}
QF.fun()
