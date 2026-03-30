console.log(b);

console.log(a); // it is temporral dead zone when we access it it gives refernce error we cannt access them

let a =10;// let can only be used after instalized

console.log(a);

var b =100;// var can be used before instalized
//TDZ is the time period between entering the scope and the variable’s declaration, during which the variable exists but cannot be accessed.

//let a =100; it gives syntax error,

//var a = 10; it alos gives syntax error caues a is alread declared with let

const b1 = 1000;// it is more strict than let a; a=10; console.log(a);

//const b22;// it gives syntax error

b1 = 20000;// it gives type error
