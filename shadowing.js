var c = 100;
function x()
{
    var c= 30;
    console.log(c);
   

}
x();
console.log(c);

let y = 100;

{
    let y = 200;
    console.log(y);
}

console.log(y);

var y1 = 100;

{
    var y1 = 200; // not true shadowing
    console.log(y1);
}

console.log(y1); // as var will ignore the block scope so it returns same value, it doesnt create block scope it refers to same variable

/*let aa =20;
{
    var aa= 20; // it is ilegal shadowing
}*/

let a= 20;
function x(){
    var a= 30;
    console.log(a);
}
x();
console.log(a);
