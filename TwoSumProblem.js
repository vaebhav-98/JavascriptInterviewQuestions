// Dynamic programming solution for the subset sum problem. Find all the pairs of two integers in an unsorted array that sum up to a given Result.
// For example, arr = [3, 5, 2, -4, 8, 11] and the sum is 7, 
// Output : [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

// let arr = [2,4,11,6];

//using hashing
// let target = 15;

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

/* const twoPointerApproach = () => {
    let left = arr[0];
    let right = arr[arr.length - 1];
    while (left < right) {
        if (left + right === target) {
            return [left, right]
        }
        else if (left + right < target) {
            left++;
        }
        else {
            right--;
        }
    }
} */
/* const twoPointerApproach = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return []; // Return empty array if no such pair is found
} */

/* const twoPointerApproach = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
} */

//if array is not sorted then sort first. Time complexity - O(n log n) for sorting + O(n) for two-pointer approach = O(n log n)
const twoPointerApproach = (arr, target) => {
    arr.sort((a, b) => a - b); // Sort the array first
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return []; // Return empty array if no such pair is found
}

const arr =[3, 5, 2, -4, 8, 11];
const target = 7;

console.log(twoPointerApproach(arr,  target));