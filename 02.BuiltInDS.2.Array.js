// Built-in Data Strecture in JS
// 2-Array
/**
 * Array Declaration
 * there is 2 way for that
 * 1- Array Constractor
 * 2- Array Literal
 */

// 1- Using Array Constractor
let arr = new Array();
let arr2 = new Array(5);//with length 5 - [ <5 empty items> ]
let arr3 = new Array(5,4,3);//[5,4,3]
// 2- Using Array Literal
let arr4 = [];

console.log(arr,arr2,arr3,arr4);
/** Now we can summary that **/
/*
 * arrayName = new Array();
 * arrayName = new Array(Number length);
 * arrayName = new Array(element1, element2, element3);
 * 
*/

/**Array Initalization**/
/**
 * Duning declaration like
 * - arrayName = new Array(element1, element2, element3,...);
 * - arrayName = [element1,element2,...]
 * 
 * We can use fill / form methods
 */
arr = new Array(7).fill(-1);
console.log(arr);//[-1, -1, -1, -1,-1, -1, -1]
arr = Array.from({length:5},(_,i)=>i+1);//[ 1, 2, 3, 4, 5 ]
console.log(arr)
arr = Array.from('Test');//[ 'T', 'e', 's', 't' ]
console.log(arr);

/** Array Iterators Keys and Values **/ 
arr = ['Sallam','Rady','Ramadan'];
// to get array keys use .keys()
console.log([...arr.keys()]);//[ 0, 1, 2 ]
// loop in our array keys
const iterator1 = arr.keys();
for (const key of iterator1) {
  console.log(key);
}
// to get array values use values()
console.log([...arr.values()]);//[ 'Sallam', 'Rady', 'Ramadan' ]
// loop in our array values
const iterator2 = arr.values();
for (const val of iterator2) {
  console.log(val);
}

// to get array elements as pairs <k,v> use .entries()
console.log([...arr.entries()]);//[ [ 0, 'Sallam' ], [ 1, 'Rady' ], [ 2, 'Ramadan' ] ]
for (let [k, v] of arr.entries()) {
    console.log(`${k}: ${v}`);
}
// convert array to map
let M1 = new Map(arr.entries());
console.log(M1);//{ 0 => 'Sallam', 1 => 'Rady', 2 => 'Ramadan' }

/** Convert Array To String **/
//.toString()
console.log(arr.toString()) 
//.join(char)
console.log(arr.join('-')) 
//.toLocaleString()
console.log(arr.toLocaleString('en', { timeZone: 'UTC' }));
// By JSON.stringify()
console.log(JSON.stringify(arr));

/** Add Element To Array **/ 
arr.push('sallamrady@gmail.com');
arr.unshift('JS Developer');
arr[arr.length] = 'seek to be one of the best 50 js developer in the world';
arr.splice(1,0,'name is');
arr.splice(5,0,'email is');
console.log(arr);

arr.splice(5,0,'ASP.Net');
arr.push('php');
arr.unshift('c#');
/**Remove Element To Array**/ 
arr.pop();
arr.shift();
arr.splice(5,1);
console.log(arr);

/** Copy Array **/
arr = [1,2,3,4,5];
let arrCopy = [...arr];
arr[0] = 10;
console.log('original array',arr)
console.log('coped array',arrCopy);
arr = [{n:1},{n:2},{n:3},{n:4}];
arrCopy = [...arr];
arr[0].n = 10;
//arrCopy[0].n -->10 as object is refrence variable
console.log('original array',arr)
console.log('coped array',arrCopy);
arr = [{n:1},{n:2},{n:3},{n:4}];
arrCopy = JSON.parse(JSON.stringify(arr));
arr[0].n = 10;
console.log('original array',arr)
console.log('coped array',arrCopy);

/****/ 










/**Ref:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array**/ 