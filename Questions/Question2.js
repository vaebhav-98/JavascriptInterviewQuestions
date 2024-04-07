//Find the second largest element in the array

let findSecondLargest = (arr) => {
    if (arr.length < 2) {
        return "Array must have at least two elements";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest !== -Infinity ? secondLargest : "No second largest element found";
}

// Example usage:
let myArray = [5, 8, 2, 10, 3];
console.log(findSecondLargest(myArray)); // Output: 8
