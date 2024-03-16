// Given an integer array nums, return true if any value appears at least twice in the array, and 
// return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// This implementation is correct and efficient for small arrays for larger arrays, 
// the time complexity can become an issue because the includes method has to iterate through the array arr each time 
// to check for duplicates, resulting in a time complexity of O(n^2)

let containsDuplicate = (nums) => {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) {
            return true;
        }
        arr.push(nums[i]);
    }
    return false;
}
console.log(containsDuplicate([1,2,3,1]))

// This implementation has a time complexity of O(n) because Set operations like has and add are typically constant time operations.
let containsDuplicate2 = (nums)=> {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

//This approach has a time complexity of O(n log n) due to the sorting operation.
let containsDuplicate3 = (nums)=> {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
}
