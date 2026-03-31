
// callback function
function greet(name,respect)
{
    console.log("hello" + name);
    respect();// while naming function name is parametre, respect is function

}
function reply()
{
    console.log("hi");
}
greet("Samii", reply);

//event listener
/*const btn = document.getElementById("myBtn");
btn.addEventListener("click",function()
{
    console.log("button clicked");
});*/

function attachEventlisterner()
{ let count =0;
     document.getElementById("myBtn").addEventListener("click",function()
{
    console.log("button clicked",++count);
});
}
attachEventlisterner();