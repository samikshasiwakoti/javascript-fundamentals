
setTimeout(function ()
{
    console.log("javascript");
},500);
// this is call backfunction

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function(orderId) {

    api.proceedToPayment(orderId, function(paymentInfo) {

        api.showOrderSummary(paymentInfo, function() {

            api.updateWallet();

        });

    });

}); // this type of function is very unmanagable wich is  called callback hell and also called pyramid of room
//callback hell is one of issues we face while writing asynchronous code in js
// another problem that we face is inversion of control
