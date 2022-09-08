/**
 * Example 3
 * print all pairs 
 * time complexity -worest case-> O(n^2)
 */
 function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
}

printAllPairs(5);