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

duplicateFinder()