
var x= 7;

function getName()
{
    console.log("Hi form fucntion");
}
getName();// when fucntion is called, new execution context for that function is created and it is ushed on top of call stack when fucntion is executed it is poped from stack
console.log(x);
console.log(getName);