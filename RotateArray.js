
const rotateArray = (arr) => {
    let shiftCount = 1;
    while (shiftCount) {
        let temp = arr[arr.length - 1];
        for (let i = arr.length - 1; i >= 1; i--) {
            arr[i] = arr[i - 1]
        }
        arr[0] = temp;
        shiftCount--;
    }
    return arr;
}


const array1 = [4, 5, 2, 1, 7, 8];
const result = rotateArray(array1);
console.log(result);