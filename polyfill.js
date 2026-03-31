//Creating your own version of a built-in method (like map, filter, reduce) so you understand how it works internally or support older environments.

//polyfill for map
//firstly custom implementation

Array.prototype.myMap =function( x)
{
    const result=[];
    for(let i=0;i<this.length;i++)
    {
        result.push(x(this[i],i,this));
    }
 return result;
}
const arr = [1, 2, 3];

const output = arr.myMap(x => x * 2);
console.log(output); // [2, 4, 6]

// same process is done for map and filter polyfill

Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }

    return acc;
};
const arr1 = [1, 2, 3, 4];

const output1 = arr1.myReduce((acc, curr) => acc + curr, 0);
console.log(output1); // 10

