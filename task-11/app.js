/**
 * Привести первую букву строки к верхнему регистру
 * @param string строка
 */
function capitalizeFirstLetter(string) {
    if (typeof string !== "string") {
        return "Это не строка";
    }

    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

console.log("");
console.log("Результат функции capitalizeFirstLetter:");
console.log(capitalizeFirstLetter("строка, которая изначально не начинается с заглавной буквы."));
console.log("");

// =========================================================================

/**
 * Укоротить строку по количеству символов
 * @param string строка
 * @param maxNumberOfLetters максимально возможное количество символов
 * @returns укороченная строка (если после знака препинания нет пробела, то знак препинания остаётся в строке)
 */
function shortStringByNumberOfLetters(string, maxNumberOfLetters) {
    if (typeof string !== "string") {
        return "Это не строка";
    }

    if (string.length <= maxNumberOfLetters) {
        return string;
    }

    const END_LINE = "...";
    const indexOfLastLetter = getIndexOfLastLetter(string, maxNumberOfLetters);

    return string.slice(0, string[indexOfLastLetter] !== " " ? indexOfLastLetter + 1 : indexOfLastLetter) + END_LINE;
}

/**
 * Получить индекс последнего символа из списка "separators"
 * @param string строка
 * @param numberOfLetters количество символов
 */
function getIndexOfLastLetter(string, numberOfLetters) {
    const separators = [" ", ",", ".", "!", "?", ":", ";"];

    let indexOfLastLetter = numberOfLetters - 1;

    while(!separators.includes(string[indexOfLastLetter]) && indexOfLastLetter > 0) {
        indexOfLastLetter--;
    }

    return indexOfLastLetter;
}

console.log("");
console.log("Результаты функции shortStringByNumberOfLetters:");
console.log(shortStringByNumberOfLetters("Строка, длина которой - 35 симолов.", 40));
console.log(shortStringByNumberOfLetters("Строка с более 40 симв-в и двоеточием: 'завершение строки'.", 40));
console.log(shortStringByNumberOfLetters("Строка с более 40 симв-в и воск.зн! 'завершение строки'.", 40));
console.log(shortStringByNumberOfLetters("Строка с более 40 симв-в и вопр.зн?'завершение строки'.", 40));
console.log(shortStringByNumberOfLetters("Строка с более 40 символов с пробелами 'завершение строки'.", 40));
console.log("");

// =========================================================================

/**
 * Определить является ли одна строка подстрокой другой строки
 * @param firstString первая строка
 * @param secondString вторая строка
 */
function defineSubstring(firstString, secondString) {
    if (firstString.length >= secondString.length) {
        return firstString.includes(secondString);
    } else {
        return secondString.includes(firstString);
    }
}

console.log("");
console.log("Результат функции defineSubstring:");
console.log(defineSubstring("в этой строке есть подстрока", "подстрока"));
console.log(defineSubstring("в этой строке нет подстроки", "подстрока отсутствует"));
console.log(defineSubstring("подстрока", "в этой строке есть подстрока"));
console.log(defineSubstring("подстрока отсутствует", "в этой строке нет подстроки"));
console.log("");
