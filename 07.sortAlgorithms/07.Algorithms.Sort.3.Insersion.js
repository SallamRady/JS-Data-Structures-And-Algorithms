//Insertion Sort - complexity -worest case-> O(n^2)

function insertionSort(arr) {
  let temp;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
}

console.log(insertionSort([6, 4, 15, 10]));
console.log(insertionSort([5, 3, 4, 1, 2]));
