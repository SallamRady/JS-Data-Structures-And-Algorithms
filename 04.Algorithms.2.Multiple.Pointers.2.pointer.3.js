/**
 * Write a function called maxSubarraySum
 * which accepts an array of integers and
 * a number called n. The function should
 * calculate the maximum sum of n consecutive
 * elements in the array.
 */

function maxSubarraySum(arr, n) {
  let sum = 0,answer = 0,l = 0,r = 0;

  while (l < arr.length) {
    while (r < arr.length && r - l <= n - 1) {
      sum += arr[r];
      r++;
    }

    answer = answer > sum ? answer : sum;
    sum -= arr[l];
    l++;
  }

  return answer;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum([4,2,1,6],1));
console.log(maxSubarraySum([4,2,1,6,2],4));
console.log(maxSubarraySum([],4));
