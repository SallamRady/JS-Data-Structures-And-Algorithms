/**
 * CF252-D2-C
 * Little Petya likes points a lot. 
 * Recently his mom has presented him n points lying on the line OX. 
 * Now Petya is wondering in how many ways he can choose three distinct 
 * points so that the distance between the two farthest of them doesn't exceed d.
 * Note that the order of the points inside the group of three chosen points doesn't matter.
 */

function twoPointerVariableWindow(arr,d){
    let l = 0,answer = 0;

    for (let r = 0; r < arr.length; r++) {
        
        while(arr[r] - arr[l] > d)
            l++;
        
        answer +=((r-l)*(r-l-1))/2;
    }

    return answer;
}

console.log(twoPointerVariableWindow([1,2,3,4],3));