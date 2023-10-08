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
console.log(fIDnArray, 'fIDnArray');


//Using reduce() function

const flattenArray = (arr) => {
    return arr.reduce((prevVal, currVal) => {
        if (Array.isArray(currVal)) {
            prevVal = prevVal.concat(flattenArray(currVal))
        }
        else {
            prevVal.push(currVal)
        }
        return prevVal;
    }, [])
}

console.log(flattenArray(arr), "flattenedArray");


//output?
let x= {}, y = {name:"Ronny"},z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x);
