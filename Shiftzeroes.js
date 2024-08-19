function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;

  // Move all non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex++] = arr[i];
    }
  }

  // Fill the remaining positions with zeros
  while (nonZeroIndex < arr.length) {
    arr[nonZeroIndex++] = 0;
  }

  return arr;
}

// Example usage:
let arr = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(arr)); // Output: [1, 3, 12, 0, 0]