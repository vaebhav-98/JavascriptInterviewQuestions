// Return all objects with maximum value from a given object.

let obj = { t: 4, h: 3, i: 4, s: 3, j: 1 };

let findMaxValue = (obj) => {
    let res = {};
    let maxValue = Math.max(...Object.values(obj));

    for (let keys in obj) {
        if (obj[keys] === maxValue) {
            res[keys] = obj[keys];
        }
    }
    return res;
}

console.log(findMaxValue(obj));