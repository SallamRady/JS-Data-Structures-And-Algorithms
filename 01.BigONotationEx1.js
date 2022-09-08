// Example 1
/**
 * Suppose we want to write a function [getSum] that 
 * calculates the sum of all numbers from 1 up to (and including) some number n.
 */

 let number = 1000000000,solution = 1;

//solution 1 - time complexity -worest case-> o(n)
function getSum(num){
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;      
    }
    return sum;
}

console.log(`----------------Solution : ${solution}------------------`)
let t1 = performance.now();
console.log(`sum of number from 1 to ${number} = ${getSum(number)}`);
let t2 = performance.now();
console.log(`this operation take ${(t2-t1)/1000} sec.`);
//solution 2 - time complexity -worest case-> o(1)
solution++;
function getSum(num){
    let sum = (num*(num+1))/2;
    return sum;
}

console.log(`----------------Solution : ${solution}------------------`)
t1 = performance.now();
console.log(`sum of number from 1 to ${number} = ${getSum(number)}`);
t2 = performance.now();
console.log(`this operation take ${(t2-t1)/1000} sec.`);