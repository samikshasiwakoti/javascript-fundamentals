console.log("start");
setTimeout(function Cb ()
{
 console.log("Callback");
},500);
console.log("End");
// suppose there are million of code here which will run for losec so the GEC will wait till 1o sec and duinr that 5milisecond will also be expires and wait in callback queue untill
//call stack is empty, after 10 sen GEC will also be remove or popout from that call stack and cb will be there
// it is also know as concurrecny model
// 0 milisecond it will go to callback queue

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000)
{
endDate = new Date().getTime();
}
console.log("while expires");

