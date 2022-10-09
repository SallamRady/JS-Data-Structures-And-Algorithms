//Merge Sort - complexity -worest case-> O(n*log(n))

function merge(arr1, arr2) {
  let len1 = arr1.length,
    len2 = arr2.length,
    p1 = 0,
    p2 = 0;
  let arr = [];

  while (p1 < len1 && p2 < len2) {
    if (arr1[p1] < arr2[p2]) {
      arr.push(arr1[p1]);
      p1++;
    } else {
      arr.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < len1) {
    arr.push(arr1[p1]);
    p1++;
  }
  while (p2 < len2) {
    arr.push(arr2[p2]);
    p2++;
  }

  return arr;
}

function mergeSort(arr){
    if(arr.length <= 1)
        return arr;
    
    let midPoint = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,midPoint));
    let right = mergeSort(arr.slice(midPoint));

    return merge(left,right);
}



console.log(mergeSort([3, 4, 5, 8,1, 2, 6, 7]));
