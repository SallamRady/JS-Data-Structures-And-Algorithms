function frqArray(str) {
  let len = str.length;
  let frq = {};
  str.toLowerCase();
  for (let i = 0; i < len; i++) {
    if (frq[str[i]] > 0) frq[str[i]]++;
    else frq[str[i]] = 1;
  }

  return frq;
}

console.log(frqArray("hello world"));
