class HashTable {
  constructor(size = 64) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let result = 0,
      val;
    let weridPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      val = key[i].charCodeAt(0) - 96;
      result = (result * weridPrime + val) % this.keyMap.length;
    }
    return result;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (const arr of this.keyMap[index]) {
        if (arr[0] == key) return arr[1];
      } 
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (const arr of this.keyMap) {
      if (arr) {
        for (const ar of arr) {
          valuesArr.push(ar[1]);
        }
      }
    }
    return valuesArr;
  }


  keys(){
    let keysArr = [];
    for (const arr of this.keyMap) {
      if (arr) {
        for (const ar of arr) {
            keysArr.push(ar[0]);
        }
      }
    }
    return keysArr;
  }
}
let ht = new HashTable();

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

console.log(ht.keyMap);

console.log(ht.get("yellow"));
console.log("--------------");
console.log(ht.values());
