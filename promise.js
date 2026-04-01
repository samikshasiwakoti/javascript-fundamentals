const promise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Success!");
    } else {
        reject("Failed!");
    }
});// creating promise

promise// handaling result which is consuming promise
  .then(result => console.log(result))
  .catch(error => console.log(error));


  const myPromise = new Promise(function (resolve, reject) {
    console.log("Task started...");

    setTimeout(function () {
        resolve("Task completed after 2 seconds");
    }, 2000);
});

myPromise.then(function (result) {
    console.log(result);
});

const promise1 = new Promise(function (resolve) {
    resolve(2);
});

promise1
.then(function (num) {
    console.log(num);   // 2
    return num * 2;
})
.then(function (num) {
    console.log(num);   // 4
    return num * 2;
})
.then(function (num) {
    console.log(num);   // 8
});