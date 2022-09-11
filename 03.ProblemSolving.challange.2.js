/**
 * Maria plays college basketball and wants to go pro. 
 * Each season she maintains a record of her play. 
 * She tabulates the number of times she breaks her 
 * season record for most points and least points in a game. 
 * Points scored in the first game establish her record for the season, 
 * and she begins counting from there.
 */

function breakingRecords(scores){
    let mn = scores[0],mx = scores[0],mnCount = 0,mxCount = 0,len = scores.length;

    for (let i = 0; i < len; i++) {
        if(scores[i] < mn){
            mn = scores[i];
            mnCount++;
        }
        if(scores[i] > mx){
            mx = scores[i];
            mxCount++;
        }
    }

    return {mxCount,mnCount};
}

console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));