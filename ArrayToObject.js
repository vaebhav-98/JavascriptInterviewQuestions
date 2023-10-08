const arr = ["a", "b", "c"];

// #Object.assign() method
const obj = Object.assign({}, arr);
console.log(obj, 'obj')

// #using spread operator
const obj1 = { ...arr };
console.log(obj1, 'obj1')

// #using reduce function
const obj2 = arr.reduce((acc, currentValue, index) => {
    acc[index] = currentValue;
    return acc;
}, {})

console.log(obj2, 'obj2')