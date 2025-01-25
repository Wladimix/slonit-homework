function myFilter(array, callback) {
    if (!Array.isArray(array)) {
        return "это не массив"
    }

    const filetredArray = [];

    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {

        const resultCallback = callback(array[arrayIndex], arrayIndex, array);

        if (resultCallback) {
            filetredArray.push(array[arrayIndex]);
        }

    }

    return filetredArray;
}

const numbers = [1, 2, 3, 4, 5];
const languages = [
    {
        name: "PHP",
        typing: "dynamic",
    },
    {
        name: "JavaScript",
        typing: "dynamic",
    },
    {
        name: "Python",
        typing: "dynamic",
    },
    {
        name: "С",
        typing: "static",
    },
    {
        name: "С++",
        typing: "static",
    },
]

const evenNumbers = myFilter(numbers, num => num % 2 === 0);
const greaterThanThree = myFilter(numbers, num => num > 3);
const lessThanIndexThree = myFilter(numbers, (num, index) => index < 3);
const onlyDynamicTyping = myFilter(languages, language => language.typing === "dynamic");

console.log(evenNumbers);
console.log(greaterThanThree);
console.log(lessThanIndexThree);
console.log(onlyDynamicTyping);
