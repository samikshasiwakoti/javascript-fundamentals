   // map function
   
   const arr = [5,1,3,2,6];
const output = arr.map(function double(num)
{
    return num*2;
});
console.log(output);

// fucntion(num)
// return num.toString(2); for doing binary transformation
/*function binary(x)
{
    return x.toString(2);
} const output = arr.map(binary);
 console.log(output);
 */


 // filter is used to filtering numbers in the particular array
// fiter odd values


 const arr1 = [6,1,3,2,5];
 /*function isOdd(x)
 {
    return x % 2;
 }*/

function isEven(x)
{
    return x%2 ==0;
}
const output1 = arr1.filter(isEven);
console.log(output1);
// const output = arr.filter((x)=> x<3);

// reduce function it is used as a palce where we have to take all values of array and give one single value like sum, largest,maxmium

/*function findsum(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum + arr[i];
    }
    return sum;

}
console.log(findsum(arr));*/
const arr3 = [5,1,3,2,6]; // acc is acting like sum
const output3 = arr3.reduce(function(acc,curr)
{
 acc = acc + curr;
 return acc;


},0);
console.log(output3);

/* fucntion findMax(arr)
{
let max=0;
for(let i=0;i<arr.length;i++)
{
if(arr[i]>max)
{max = arr[i];
}
}
return max;
}
console.log(findMax(arr));
*/
const arr4 = [5, 1, 3, 2, 6];

const output4 = arr4.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

console.log(output4);