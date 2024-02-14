
const isValid = (s) => {
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    let stck = [];

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stck.push(char)
        }
        else if (stck[stck.length - 1] === map[char]) {
            stck.pop()
        }
        else return false;
    }
    return stck.length === 0;
}

console.log(isValid("{[()]}"));











/* const isValid = (s) => {
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    let stck = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stck.push(s[i]);
        }
        else if (stck[stck.length - 1] === map[s[i]]) {
            stck.pop();
        }
        else return false;
    }
    return stck.length === 0;
}

console.log(isValid("{[()]}")) */