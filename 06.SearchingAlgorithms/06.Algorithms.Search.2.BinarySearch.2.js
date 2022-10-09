/**
 * HackerRank - icecreamParlor
 * Two friends like to pool their money and go to the ice cream parlor.
 * They always choose two distinct flavors and they spend all of their money.
 * Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.
 */

function binarySearch(arr, val) {
  let l = 0,
    r = arr.length - 1,
    mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] == val) return arr[mid];

    if (val < arr[mid]) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}
function icecreamParlor(m, arr) {
  //there is alot of solutions :) but I want to use binary search.
  let places = {},
    result;
  for (let i = 0; i < arr.length; i++) {
    places[arr[i]] = i + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    result = binarySearch(arr, m - arr[i]);
    if (result != -1 && places[result] != i + 1) {
      return [places[result], i + 1].sort((a, b) => a - b);
    }
  }
}
