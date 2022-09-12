/**
 * HackerRank - The Power Sum
 * Find the number of ways that a given integer, X , 
 * can be expressed as the sum of the  Nth powers of unique, 
 * natural numbers.
 * For example, if X =  13 and N =  2 , 
 * we have to find all combinations of unique 
 * squares adding up to 13. The only solution is 2^2 + 3^2.
 */
function powerSum(num,power,target = 0,i = 1){
    if(num == target)
        return 1;
    else if(num < target || i == 100)
        return 0;

    let extra = i ** power;
    let branch1 = 0,branch2 = 0;
    branch1 += powerSum(num,power,target+extra,i+1);
    branch2 += powerSum(num,power,target,i+1);

    return branch1 + branch2;
}

console.log(powerSum(100,3));