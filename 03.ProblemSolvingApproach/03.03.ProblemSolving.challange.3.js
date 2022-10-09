/**
 * Two children, Lily and Ron, want to share a chocolate bar. 
 * Each of the squares has an integer on it.
 * Lily decides to share a contiguous segment of the bar selected such that:
 * 1.The length of the segment matches Ron's birth month, and,
 * 2.The sum of the integers on the squares is equal to his birth day.
 * Determine how many ways she can divide the chocolate.
 */

 function birthday(arr, d, m) {
    let sum = 0,len = arr.length,answer = 0,temp = m,i = 0,ind;

    while(len){
        ind = i;
        sum = 0;

        while(temp){
            sum +=arr[ind];
            ind++;
            temp--;
        }
        if(sum == d)answer++;

        temp = m;
        i++;
        len--;
    }

    return answer;
}

console.log(birthday([4],4,1));