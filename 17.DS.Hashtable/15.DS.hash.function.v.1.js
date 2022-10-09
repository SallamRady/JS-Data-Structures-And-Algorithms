/**
 * hash function version 1 - this function has some problems
 * 1.work only on strings
 * 2.complexity not constant -> O(n) 
 * 3.could be a little more random.
 * @param {*} key 
 * @param {*} arrLen length of array.
 * @returns index
 */

function hash(key,arrLen){
    let result = 0;

    for (const c of key) {
        result += c.charCodeAt(0) - 96;
        result %= arrLen;
    }
    return result;
}

console.log(hash("pink",10));
console.log(hash("yellow",10));
console.log(hash("cyan",10));
console.log(hash("maroon",10));