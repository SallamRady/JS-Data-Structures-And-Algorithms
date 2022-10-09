/**
 * Write a function called sumZero 
 * which accepts a sorted array of integers. 
 * The function should find the first pair 
 * where the sum is 0. 
 * Return an array that includes 
 * both values that sum to zero or -1 if a pair does not exist
 */

function sumZero(arr){
    let l = 0,r = arr.length-1;

    while(l < r){
        if(arr[r]+arr[l] == 0) return [arr[l],arr[r]];
        if(arr[r] - arr[l] > 0) r--;
        else l++;
    }

    return -1;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));