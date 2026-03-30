function s(){
    var a= 7;
    function y(){
        console.log(a);
    }
    y();
}
x(); // it is what closures mean
// cloures means a function which bundled together with its lexical environment

function x()
{
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();


function z1(){
    var b =900;
    function x()
    {
        var a =7;
        function y1(){
            console.log(a,b);
        }
        y();

    }
    x();
}
z();