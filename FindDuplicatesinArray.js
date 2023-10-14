const arr = [5, 1, 1, 6, 2, 5, 4];
let duplicates = [];

const duplicateFinder = () => {

    for (let i = 0; i < arr.length; i++) {
        if (!duplicates.includes(arr[i])) {
            if (arr.slice(i + 1).includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

// duplicateFinder()

// Count the occurrences of each name in the array
const repetitiveArray = [
    "Radhesh",
    "Radhesh",
    "Jai",
    "Vaibhav",
    "Divyansh",
    "Divyansh"
];

const countOccurrences = repetitiveArray.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
}, {});

console.log(countOccurrences)