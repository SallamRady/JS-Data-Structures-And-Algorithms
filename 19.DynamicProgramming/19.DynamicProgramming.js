/**
 * fibonacci recursive function
 * complexity -worest case-> O(2^n) - very bad.
 * 
 * @param {*} num 
 * @returns element in fibonnanci sq.
 */
function fib(num){
    if(num <= 1) return num;
    return fib(num-1)+fib(num-2);
}
console.log(fib(5));

/**
 * optimazed version of fibonacci function
 * using dynamci programming algorithm : memozation
 * complexity -worest case-> O(n).
 * @param {*} num 
 * @param {*} memo 
 * @returns element in fibonnanci sq.
 */
function fib(num,memo = []){
    if(memo[num])return memo[num];
    if(num <= 1) return num;
    let result = fib(num-1)+fib(num-2);
    memo[num] = result;
    return result;

}
console.log(fib(45));

/**
 * optimazed version of fibonacci function
 * using dynamci programming algorithm : Tabulation
 * this algorithm better with space complexity than memozation.
 * complexity -worest case-> O(n).
 * @param {*} num 
 * @returns element in fibonnanci sq.
 */
function fib(num){
    if(num <= 1) return num;
    let fibNums = [1,1,2];
    for (let i = 3; i <= num; i++) {
        fibNums[i] = fibNums[i-1]+fibNums[i-2];
    }
    return fibNums[num];
}
console.log(fib(50));