const obj = { a: 1, b: 2, c: 3 };

// #Object.keys() and map():

const arr = Object.keys(obj).map((key) => obj[key]);
console.log(arr);

// #Object.values():
const arr1 = Object.values(obj);
console.log(arr1, 'arr1');

// #Object.entries() and map():
const arr2 = Object.entries(obj).map(([key, value]) => value);
console.log(arr2, 'arr2');

// #using spread operator
const arr3 = [...Object.values(obj)];
console.log(arr3, 'arr3');

// #Using a for...in loop
let newArray = [];
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        newArray.push(obj[key]);
    }
}

console.log(newArray, 'newArray')