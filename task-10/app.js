/**
 * Посчитать сумму числовых значений в объекте
 * @param obj объект
 */
function calcSumOfNumericFields(obj) {
    if (typeof obj !== "object") {
        return "это не объект";
    }

    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            sum += obj[key];
        }
    }

    return sum;
}

console.log("");
console.log("Результат функции calcSumOfNumericFields:");
console.log(calcSumOfNumericFields({
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7,
}));
console.log("");

/**
 * Вывести массив ключей объекта с числовыми значениями (упорядоченно от большего к меньшему)
 * @param obj объект
 */
function getArrayKeysOfNumericFields(obj) {
    const arrayValuesOfNumericFields = [];

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            arrayValuesOfNumericFields.push(obj[key]);
        }
    }

    return arrayValuesOfNumericFields
        .sort(compareNumeric)
        .reduce((resultArr, currentElem) => [ ...resultArr, getKeyByvalue(obj, currentElem) ], []);
}

/**
 * Функция для сортировки чисел
 * @param a первое число
 * @param b второе число
 */
function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

/**
 * Получить ключ объекта по значению
 * @param obj объект
 * @param value значение
 */
function getKeyByvalue(obj, value) {
    for (let key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
}

console.log("");
console.log("(Задача со звёздочкой) Результат функции getArrayKeysOfNumericFields:");
console.log(getArrayKeysOfNumericFields({
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7,
}));
console.log("");
