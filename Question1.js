//Find the frequency of elements in array using reduce method

let arr = ['hello', 'world', 'java', 'hello', 'java'];

// const result = arr.reduce((item, newitem, arra)=>{
//     return newitem
// })

const result = arr.reduce((acc, item)=>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {})

console.log(result, 'resutl')