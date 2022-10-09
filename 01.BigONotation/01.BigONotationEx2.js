/**
 * Example 2
 * print number from 0 to n then from n to 0
 * time complexity -worest case-> O(n)
 * @param {*} n 
 */
function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i <= n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
}