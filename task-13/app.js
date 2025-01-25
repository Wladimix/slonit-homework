const calculate = function (firstNumber, secondNumber, operation) {
    return operation(firstNumber, secondNumber);
}

const getSummation = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const getDifference = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

const getMultiplication = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

const getDividing = function (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

const operations = {
    summation: getSummation,
    difference: getDifference,
    multiplication: getMultiplication,
    dividing: getDividing,
}

const selectedOperations = ["summation", "difference", "multiplication", "dividing"];

for (let selectedOperation of selectedOperations) {
    console.log(calculate(6, 3, operations[selectedOperation]));
}
