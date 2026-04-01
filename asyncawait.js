// simple example

// const p = new Promise((resolve,reject)=>
// {
//     resolve("promise resolved value");
// });

// async function promisemanage()
// {
//     const val = await p;
//     console.log(val);
// }
// promisemanage();
    

const p3 = new Promise((resolve,reject) =>
{
    setTimeout(()=>
    {
        resolve("Promise Resolved Value");
    },1000);
});

// function getData()
// {
//     p.then((res)=> console.log(res));
//     console.log("Namastes javascript");// firstly this will printed than only above resolve will be printed
// }
// getData();

async function handle() {
console.log("helloworld");//firstly this will be printed
const val = await p3;// it will wait for 1s 
console.log("Namaste javascript");// this will be printed at second
console.log(val); //will be printed after 1s

const val1 = await p3;// it will wait for 1s 
console.log("Namaste javascript1");// this will be printed at second
console.log(val1);
}
handle();



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000); // 10 seconds
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 20000); // 20 seconds
});

async function handlePromise() {
    console.log("Hello World");

    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

handlePromise();

// const API_URL = "https://api.github.com/users/akshaymarch7";

// async function handlePromise() {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();

//     console.log(jsonValue);
// }

// handlePromise();

