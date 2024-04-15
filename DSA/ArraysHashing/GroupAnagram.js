let groupAnagrams = (strs) => {
    const map = new Map();
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result);



var groupAnagrams2 = function (strs) {
    const hashMap = {}

    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join()
        if (!hashMap[sortedStr]) {
            hashMap[sortedStr] = [strs[i]]
        } else {
            hashMap[sortedStr].push(strs[i])
        }
    }

    return Object.values(hashMap)
};


var groupAnagrams3 = function (strs) {
    let myMap = new Map();
    strs.forEach((ele) => {
        let eleSorted = ele.split('').sort().join('');
        if (myMap.has(eleSorted)) {
            myMap.set(eleSorted, [ele, ...myMap.get(eleSorted)])
        }
        else
            myMap.set(eleSorted, [ele])
    })
    return (Array.from(myMap.values()))

};

// most efficient
var groupAnagrams4 = function (strs) {
    let anagrams = new Map();

    for (let word of strs) {
        let sortedWord = [...word].sort().join('');
        if (!anagrams.has(sortedWord)) {
            anagrams.set(sortedWord, []);
        }
        anagrams.get(sortedWord).push(word);
    }

    return Array.from(anagrams.values());
};