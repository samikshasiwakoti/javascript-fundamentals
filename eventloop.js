

console.log("start");

setTimeout(function Cb() {
    console.log("callback");
}, 5000);

console.log("End");
/*
Step-by-step:
console.log("start") → executes immediately
setTimeout(...) → sends the callback to Web API (waits 5 seconds) timer starts
console.log("End") → executes immediately
After 5 seconds:
callback function (Cb) goes to callback queue
event loop moves it to call stack whenit is empty
"callback" is printed


Event loop is a mechanism that allows JavaScript to handle 
asynchronous operations by moving callbacks from the 
queue to the call stack when it is free.


1. Script runs → Call Stack
2. addEventListener → registered in Web APIs (event handler stored)
3. User clicks → event triggered
4. Callback goes to Callback Queue
5. Event Loop moves it to Call Stack
6. Callback executes


microtask queue has higher proorty and it is the callback of promises and mutation,it is executed first 

*/