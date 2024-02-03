// Dynamic programming solution for the subset sum problem. Find all the pairs of two integers in an unsorted array that sum up to a given Result.
// For example, arr = [3, 5, 2, -4, 8, 11] and the sum is 7, 
// Output : [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//using hashing
let target = 10;

const twoSum = (ar, target) => {
    let hash = {};
    let sum = [];

    ar.forEach((item) => {
        let diff = target - item;
        if (hash[diff.toString()] !== undefined) {
            sum.push([item, diff]);
        }
        hash[item.toString()] = item;
    });
    return sum;
}

// console.log(twoSum(arr, target), 'twoSum');

//using (n*n) complexity

const twosumType2 = () => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
}
// console.log(twosumType2());

const twoPointerApproach = () => {
    let left = arr[0];
    let right = arr[arr.length - 1];
    while (left < right) {
        if (left + right === target) {
            return [left, right]
        }
        else if (left < target) {
            left++;
        }
        else {
            right--;
        }
    }
}

console.log(twoPointerApproach());