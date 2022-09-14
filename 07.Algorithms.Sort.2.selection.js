//Selection Sort - complexity -worest case-> O(n^2)

function selectionSort(arr){
    let temp,len = arr.length,mnInd;

    for (let i = 0; i < len; i++) {
        mnInd = i;
        for (let j = i+1; j < len; j++) {
            if(arr[j] < arr[mnInd]){
                mnInd = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[mnInd];
        arr[mnInd] = temp;
    }

    return arr;
}

console.log(selectionSort([ 6, 4, 15, 10 ]));
console.log(selectionSort([ 5, 3, 4, 1, 2 ]));