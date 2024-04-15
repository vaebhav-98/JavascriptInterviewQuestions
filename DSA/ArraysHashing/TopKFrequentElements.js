
let getTopkFreqElem = (arr, k) => {
    let hashMap = new Map();

    arr.forEach(item => {
        hashMap.set(item, (hashMap.get(item) || 0) + 1);
    });

    let sortedElem = [...hashMap.entries()].sort((a, b) => b[1] - a[1]);

    let topKFreq = sortedElem.slice(0, k).map(item => item[0]);

    return topKFreq;
}

// Example usage:
let arr = [3, 1, 4, 4, 5, 2, 6, 1, 3, 3, 3];
let k = 3; // Choose k value

console.log(getTopkFreqElem(arr, k)); // Output: [3, 1, 4]