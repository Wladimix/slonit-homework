function mySlice(arr, start = null, end = null) {
    const newArray = [];

    const firstElement = start < 0 ? arr.length + start : start ?? 0;
    const lastElement = end < 0 ? arr.length + end : end ?? arr.length;

    for (let i = firstElement; i < lastElement; i++) {
        if (i < 0) continue;
        newArray.push(arr[i]);
    }

    return newArray;
}

function myIndexOf(arr, item, from = null) {
    const initialSearchIndex = from ?? 0;

    for (let i = initialSearchIndex; i < arr.length; i ++) {

        if (arr[i] === item) {
            return i;
        }

    }

    return -1;
}

function myIncludes(arr, item, from = null) {
    const initialSearchIndex = from ?? 0;

    for (let i = initialSearchIndex; i < arr.length; i ++) {

        const NanEqualityCondition = Number.isNaN(arr[i]) && Number.isNaN(item);

        if (arr[i] === item || NanEqualityCondition) {
            return true;
        }

    }

    return false;
}

const testArray = ["0", "1", "2", "3", "4", 5, 6, 7, 8, 9, false, NaN];

console.log("Массив для теста:");
console.log(testArray);
console.log("");
console.log("Методы arr.slice() и mySlice():");

console.log( testArray.slice(1, 4) );
console.log( mySlice(testArray, 1, 4) );
console.log("");

console.log( testArray.slice(5) );
console.log( mySlice(testArray, 5) );
console.log("");

console.log( testArray.slice(-6, -2) );
console.log( mySlice(testArray, -6, -2) );
console.log("");

console.log( testArray.slice(-4) );
console.log( mySlice(testArray, -4) );
console.log("");

console.log("Методы arr.indexOf() и myIndexOf():");
console.log( testArray.indexOf(false) );
console.log( myIndexOf(testArray, false) );
console.log("");

console.log( testArray.indexOf(7, 4) );
console.log( myIndexOf(testArray, 7, 4) );
console.log("");

console.log( testArray.indexOf(7, 8) );
console.log( myIndexOf(testArray, 7, 8) );
console.log("");

console.log( testArray.indexOf(NaN) );
console.log( myIndexOf(testArray, NaN) );
console.log("");

console.log("Методы arr.includes() и myIncludes():");
console.log( testArray.includes(false) );
console.log( myIncludes(testArray, false) );
console.log("");

console.log( testArray.includes(7, 4) );
console.log( myIncludes(testArray, 7, 4) );
console.log("");

console.log( testArray.includes(7, 8) );
console.log( myIncludes(testArray, 7, 8) );
console.log("");

console.log( testArray.includes(NaN) );
console.log( myIncludes(testArray, NaN) );
console.log("");
