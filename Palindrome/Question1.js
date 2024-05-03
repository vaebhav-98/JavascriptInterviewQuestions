
/* Given an integer x, return true if x is a 
palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:
-231 <= x <= 231 - 1
 
Follow up: Could you solve it without converting the integer to a string? */


let isPalindrome = (x) => {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reversed = 0;
    let original = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    // Check if the reversed integer overflows
    if (reversed > 2 ** 31 - 1 || reversed < -(2 ** 31)) {
        return false;
    }
    return original === reversed;
}

// Test cases
// console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
// console.log(isPalindrome(10)); // Output: false


var isPalindrome2 = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
       return false;
   }

   let reversed = 0;
   let original = x;

   // Reverse the integer
   while (x > 0) {
       reversed = reversed * 10 + x % 10;
       x = Math.floor(x / 10);
   }

   // Compare the reversed integer with the original
   return original === reversed;
};