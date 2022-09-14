
//Radix Sort - complexity -worest case-> O(n*k) where k the most number of digits in largest number.

function getDigit(num,d){
    let div = Math.floor(Math.pow(10,d));
    let digit = Math.floor(Math.abs(num)/div)%10;

    //console.log(digit);
    return digit;
}

function digitCount(num){
    if(num === 0) 
        return 1;
    
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(arr){
    let mx = 0;
    for (let i = 0; i < arr.length; i++) {
        mx = Math.max(mx,digitCount(arr[i]));
    }
    return mx;
}



function radixSort(arr){
    let len = mostDigits(arr);

    for (let i = 0; i < len; i++) {
        let buckets = Array.from({length:10},()=>[]);
        
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j],i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort([1234, 0,11,1098,56, 7]));