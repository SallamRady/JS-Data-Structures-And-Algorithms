//Bubble Sort :) - complexity o(n^2)

function bubbleSort(arr){
    let temp = 0,len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(arr[j] > arr[i]){
                //swap.
                temp =  arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
    }

    return arr;
}

console.log(bubbleSort([ 6, 4, 15, 10 ]));
console.log(bubbleSort([ 5, 3, 4, 1, 2 ]));