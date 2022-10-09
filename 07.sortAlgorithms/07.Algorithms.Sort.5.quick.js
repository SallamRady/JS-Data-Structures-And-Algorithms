
//Quick Sort - complexity -worest case-> O(n*log(n))

function pivot(arr,start = 0,end = arr.length-1){
    let swap = (arr,i,j)=>{
        [arr[i],arr[j]] = [arr[j],arr[i]];
    };
    let piovtElement = arr[start],swapIndex = start;

    for (let i = start+1; i <= end; i++) {
        if(piovtElement > arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
        }
        //console.log(arr);
    }
    
    swap(arr,swapIndex,start);
    //console.log(arr);
    return swapIndex;
}

function quickSort(arr,left = 0,right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr,left,right);
        //left side
        quickSort(arr,left,pivotIndex-1);
        //right side
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

console.log(quickSort([ 5, 2, 1, 8, 4, 7, 6, 3 ]));