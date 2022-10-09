/**
 * Anagrams
 * Given two strings,
 * write a function to determine
 * if the second string is an anagram of the first.
 * An anagram is a word, phrase,
 * or name formed by rearranging the letters of another,
 * such as cinema, formed from iceman.
 */

//solution 1
function isAnagrams(str1, str2) {
  let frq1 = {},
    frq2 = {},
    len1 = str1.length,
    len2 = str2.length;

  if (len1 != len2) return false;

  for (let i = 0; i < len1; i++) {
    if (frq1[str1[i]] > 0) frq1[str1[i]]++;
    else frq1[str1[i]] = 1;

    if (frq2[str2[i]] > 0) frq2[str2[i]]++;
    else frq2[str2[i]] = 1;
  }

  for (let i = 0; i < len1; i++) {
    if (frq1[str1[i]] != frq2[str1[i]]) return false;
  }
  return true;
}


//solution 2
function isAnagrams(str1, str2){
    if(str1.length !== str2.length)
        return false;
    
    let frq = {};

    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        if(frq[element] > 0) frq[element]++;
        else frq[element] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        const element = str2[i];
        if(frq[element] <= 0)
            return false;
        else
            frq[element]--;
    }
    return true;
}

console.log(isAnagrams("zaz", "zza"));