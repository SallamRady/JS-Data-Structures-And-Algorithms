/**
 * Given an array of bird sightings where 
 * every element represents a bird type id, 
 * determine the id of the most frequently sighted type. 
 * If more than 1 type has been spotted that maximum amount, 
 * return the smallest of their ids.
 */

 function migratoryBirds(arr) {
    let frq = {},len = arr.length,answer;

    for (let i = 0; i < len; i++) {
        if(frq[arr[i]] > 0) frq[arr[i]]++;
        else frq[arr[i]] = 1;

        if(i == 0){
            answer = arr[0];
        }else{
            if(frq[arr[i]] > frq[answer]){
                answer = arr[i];
            }else if(frq[arr[i]] == frq[answer]){
                answer = answer <= arr[i]?answer:arr[i];
            }
        }
    }

    return answer;
}