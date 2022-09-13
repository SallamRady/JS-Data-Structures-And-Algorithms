//binarySearch complexity -worest case->O(log(n))

function binarySearch(arr,val){
    let l =0,r = arr.length - 1,mid;

    arr.sort((a,b)=>a-b);
    while(l <= r){
        mid = Math.floor((l+r)/2);

        if(arr[mid] == val) return mid;

        if(arr[mid] < val) l = mid+1;
        else r = mid-1;


    }

    return -1;
}

console.log(binarySearch([12,34,5,9,12,19,2,9,1],12));