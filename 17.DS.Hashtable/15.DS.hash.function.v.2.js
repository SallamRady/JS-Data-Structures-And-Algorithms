/**
 * hash function version 2 - this function has a problem
 * hash("pink",13) and hash("cyan",13) give the same value.
 * 
 * @param {*} key 
 * @param {*} arrLen length of array.
 * @returns index
 */

 function hash(key,arrLen){
    let result = 0,val;
    let weridPrime = 31;
    for (let i = 0; i < Math.min(key.length,100); i++) {
        val = key[i].charCodeAt(0) - 96;
        result = (result*weridPrime+val)%arrLen;
    }
    return result;
}

console.log(hash("pink",13));
console.log(hash("yellow",13));
console.log(hash("cyan",13));
console.log(hash("maroon",13));