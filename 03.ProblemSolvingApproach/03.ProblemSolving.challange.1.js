/**
 * There will be two arrays of integers. 
 * Determine all integers that satisfy the following two conditions:
 * 1.The elements of the first array are all factors of the integer being considered
 * 2.The integer being considered is a factor of all elements of the second array
 * These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
 */

function getConsideredNumber(arr1,arr2){
    let validNums = [];
    let len1 = arr1.length;
    let len2 = arr2.length;
    let valid = true;

    arr1.sort((a,b)=>b-a);
    arr2.sort((a,b)=>a-b);

    
    for (let i = arr1[0]; i <= arr2[0]; i++) {
        valid = true;
        for (let j = 0; j < len1; j++) {
            if(i%arr1[j] != 0){
                valid = false;
                break;
            }
        }
        if(valid){
            for (let j = 0; j < len2; j++) {
                if(arr2[j]%i != 0){
                    valid = false;
                    break;
                }
            }
            if(valid)validNums.push(i);
        }
    }

    return validNums.length;
}

console.log(getConsideredNumber([2,4],[16,32,96]));