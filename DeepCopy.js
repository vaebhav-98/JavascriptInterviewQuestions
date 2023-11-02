
const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    }

    const copy = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

const originalObject = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Exampleville"
    },
    hobbies: ["reading", "hiking"]
};

const deepCopyObject = deepCopy(originalObject);

// Modify the deep copy
deepCopyObject.name = "Jane";
deepCopyObject.address.city = "New Exampleville";
deepCopyObject.hobbies.push("swimming");

console.log(originalObject); // The original object remains unchanged
console.log(deepCopyObject); // The deep copy has the modified values