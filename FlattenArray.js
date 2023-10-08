const arr = [["AA"], ["BB", "CC"], ["DD"]];

const fArray = arr.flat();
console.log(fArray, "fArray");


//Alternative way is to use concat() & spread syntax
const fArray2 = [].concat(...arr);
// console.log(fArray2, "fArray2");


const arraydn = [[["AA"]], [["BB", "CC"]], [["DD"]]];

//If an array is deeply nested specify the depth level
const fDnArray = arraydn.flat(2);
console.log(fDnArray, "fDnArray");


const newArray = [[[1, [1.1]], 2, 3], [4, 5]];
//If an array is deeply nested and you don't know the depth level
const fIDnArray = newArray.flat(Infinity)
console.log(fIDnArray, 'fIDnArray')