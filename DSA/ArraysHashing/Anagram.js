
/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false */

let isAnagram = (s, t)=> {
    if(s.length !== t.length){
        return false;
    }

    let charcount = {};

    for (let char of s) {
        charcount[char] = (charcount[char] || 0) + 1;
    }

    for(let char of t){
        if(!charcount[char]){
            return false;
        }
        charcount[char]--;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"))