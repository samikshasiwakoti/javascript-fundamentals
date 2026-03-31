a();
//b();

// function statement also know as statement
function a()
{
    console.log("a called");
} // this is way of creating fucntion is fucntion statement


// function expression, fucntion can be treated as value
var b = function()
{
    console.log("b called");
}
b();
// the main diffecnce between both statement and expression is the hoisting where we can declared fucntion a before instalizating but when we declare variable before than it will throw error

// function decalaration

// ANonymous Function,wich doesnt have name, it can be used mostly with settimeout as callback

const greet = function () {
    console.log("Namaste");
};

greet();

//name fucntion expression it is same like fucntion expression but wihtn name
const d = function c1()
{
    //console.log(c1);
    console.log("b is called")
}
//b(); this is not alowed thors error


// diffence between PARAMETERS & Arguments
 function greet1(name){// parameter
    console.log("hello"+ name);
 }
 greet1("sam");// argument


 //first class function, first class citizens
var e = fucntion(param1)
{
    return function xyz()
    {

    }
}
console.log(e());


var e1 = fucntion (param1)
{
    console.log(param1);

}
function xyz()
{

}
e1(xyz);


// arrrow function

const add=(a,b)=>a+b;

