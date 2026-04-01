
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
.then(function (orderId) {
    console.log("Order ID:", orderId);
    return orderId;
})
.catch(function (err) {
    console.log("Error:", err.message);
})
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    console.log("Payment Info:", paymentInfo);
})
.catch(function (err) {
    console.log("Error:", err.message);
})
.then(function () {
    console.log("No matter what happens, I will definitely be called.");
});


// 🔸 Producer functions

function createOrder(cart) {
    return new Promise(function (resolve, reject) {

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "12345"; // simulate order id

        setTimeout(function () {
            resolve(orderId);
        }, 1000);
    });
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {

        if (!orderId) {
            const err = new Error("No Order ID");
            reject(err);
        }

        setTimeout(function () {
            resolve("Payment successful for order " + orderId);
        }, 1000);
    });
}

function validateCart(cart) {
    return cart.length > 0;
} 