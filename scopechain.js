/*function a()
{
    console.log(b);
}

a();// function is called before assignment, so at that time variable b is initalized as undefined
var b =10;*/

/*function a()// it has acess to global lexical enviornment
{ //var b =10; it will also give answer 10
    function c(){
        console.log(b);
    }
    c();
}
var b =10; // global lexical enviornment is also global scope so it can acess outside the function aslo
a();*/

function a()
{
    var b = 10;
    c();
    function c() // c function is lexical inside a function(lexical is inheri)
    {
    //console.log(b);
    }
}
console.log(b);// it is declared outside lexical environment so it can be accessed by c
a();

