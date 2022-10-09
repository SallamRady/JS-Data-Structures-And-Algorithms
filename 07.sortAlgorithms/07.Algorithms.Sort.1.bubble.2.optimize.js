//Bubble Sort - complexity O(n^2)

function bubbleSort(arr){
    let temp = 0, len = arr.length,stop;

    for (let i = len; i >= 0; i--) {
        stop = true;
        for (let j = 0; j < i-1; j++) {
            if(arr[j] >  arr[j+1]){
                stop = false;
                //swap
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        if(stop)break;
    }

    return arr;
}



  
console.log(bubbleSort([ 6, 4, 15, 10 ]));
console.log(bubbleSort([ 5, 3, 4, 1, 2 ]));