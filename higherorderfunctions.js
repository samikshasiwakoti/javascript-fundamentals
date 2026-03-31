
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayHi() {
    console.log("Hi");
}

greet("Sam", sayHi); // greet is higher order function
// sayhi is call back function

function outer() {
    return function () {
        console.log("I am returned function");
    };
}

const fn = outer();
fn();

const arr =[1,2,3];
arr.forEach(function(num)
{
    console.log(num);
});


const radii = [1, 2, 3];

radii.forEach(function (r) {
    const area = Math.PI * r * r;
    console.log(area);
});


Array.prototype.myMap = function (cb) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i]));
    }

    return result;
};

const arr1 = [1, 2, 3];

const output = arr1.myMap(function (num) {
    return num * 2;
});

console.log(output);