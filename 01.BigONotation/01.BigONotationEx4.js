
//Don't forget we work on worest case and seek to reach best case.

/**
 * function:logAtLeast5
 * time complexity -worest case-> O(n)
 */
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
      console.log(i);
    }
}

/**
 * function:logAtMost5
 * time complexity -worest case-> O(5)->O(1)
*/
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
      console.log(i);
    }
}