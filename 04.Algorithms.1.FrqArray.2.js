/**
 * Write a function called same, 
 * which accepts two arrays. 
 * The function should return true 
 * if every value in the array has it's corresponding 
 * value squared in the second array. 
 * The frequency of values must be the same.
 */

function same(arr1,arr2){
    if(arr1.length !== arr2.length)
        return false;

    let frq = {};

    for (let i = 0; i < arr1.length; i++) {
        if(frq[arr1[i]*arr1[i]] > 0) frq[arr1[i]*arr1[i]]++;
        else frq[arr1[i]*arr1[i]] = 1;   
    }

    for (let i = 0; i < arr2.length; i++) {
        if(frq[arr2[i]*arr2[i]] <= 0)
            return false;
        
        frq[arr2[i]*arr2[i]]--;
    }

    return true;
}