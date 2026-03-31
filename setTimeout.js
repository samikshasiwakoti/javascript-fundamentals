/*function x() {
    var i = 1;

    setTimeout(function () {
        console.log(i);
    }, 3000);

    console.log("Namaste JavaScript");
}

x();*/
/*
function greet() {
    console.log("Namaste");
}

setTimeout(greet, 2000);*/ 
// run the function greet after 2 seconds

function x() {
    /*for(var i=1;i<=5;i++)*/
    for(let i =1; i<=5; i++)// the copy of i in each itertaion is new copy 
    {
    setTimeout(function () { // function inside settimeout is callback function
        console.log(i);
    }, i*1000);
    }

    console.log("Namaste JavaScript");
}

x();

function c ()
{
for(var i =1; i<=5; i++)
{
    function close(c){
        setTimeout(function()
        {
            console.log(c);
        },c*1000);
    }
    close(i);
}
console.log("Namaste Javascript");
}