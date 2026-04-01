//promise is used to solve both callback hell and inversion of control  problem
// const cart= ["shoes","pants","kurta"];

// createorder(cart,function(orderid){;// orderid
// proceedToPayment(orderId);
// });

// const promise = createorder(cart);// it returns objet with  property datawith undefined
// // pormise is nothing but empty objectwith some data value on it

// promise.then(function(orderId)
// {
//     proceedTOPayment(orderId);
// });

const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function(orderId) {

    proceedToPayment(orderId, function(paymentInfo) {

        showOrderSummary(paymentInfo, function() {

            updateWallet();

        });

    });

});

createOrder(cart)
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo) {
    return updateWallet(paymentInfo);
})
.catch(function(error) {
    console.log(error);
});

