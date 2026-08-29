// За допомогою циклу `for` виведи числа від 1 до 5. Кожне число має з’явитися в консолі на окремому рядку.
function count(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

// count(1, 5);

//  Створи `removeSpaces(text)`. Циклом побудуй новий рядок, додаючи лише символи, які не є пробілами. Перевір `'learn js daily'`.
function removeSpaces(text) {
    let newText = "";
    for (let i = 0; i < text.length - 1; i++) {
        if (text[i] !== " ") {
            newText += text[i];
        }
    }
    return newText;
}

// console.log(removeSpaces("learn js daily"))

//Створи `reverseText(text)`, яка проходить від останнього символу до першого і повертає перевернутий рядок. Перевір `'browser'`.

function reverseText(text) {
    let revText = '';
    for (let i = text.length - 1; i >= 0; i--) {
        revText += text[i];
    }
    return revText;
}

// console.log(reverseText('browser'))

// Створи `hideVowels(text)`. Без `replace()` пройди циклом і заміни англійські голосні в будь-якому регістрі на `*`. Інші символи залиш без змін. Перевір `'Frontend'`.

function hideVowels(text) {
    let newText = '';
    const vowels = 'aoieu';
    for (let i = 0; i < text.length; i++) {
        const symbol = text[i];
        const symbolLower = symbol.toLowerCase();
        const isVowel = vowels.includes(symbolLower);
        newText = newText + isVowel ? "*" : symbol;
    }
    return newText;
}

// console.log(hideVowels('Frontend'));

//Створи `getInitials(fullName)`. Після `trim()` додай у результат першу літеру рядка та кожну літеру після пробілу.
// Ініціали мають бути великими й розділеними крапками. Перевір `'  olena kovalenko  '`.

function getInitials(fullName) {
    // return (fullName.trim()[0] + "." + fullName.trim().slice(fullName.trim().indexOf(" ") + 1, fullName.trim().indexOf(" ") + 2) + ".").toUpperCase()
    const str = fullName.trim();
    const index = str.indexOf(" ")
    const initials = str[0] + "." + str.slice(index + 1, index + 2) + ".";
    return initials.toUpperCase();
}

// console.log(getInitials('  olena kovalenko  '))

// Створи `findLongestWord(text)`. Не використовуй масиви або `split()`. Проходь по рядку разом із додатковим
// пробілом у кінці, накопичуй поточне слово й запам’ятовуй найдовше. Перевір `'learning loops builds skill'`.

function findLongestWord(text) {
    let longestWord = '';
    let currWord = '';
    for (let i = 0; i < text.length; i++) {
        currWord += text[i];
        if (text[i] === " " || i === text.length - 1) {
            if (currWord.length > longestWord.length) {
                longestWord = currWord;
            }
            currWord = "";
        }
    }
    return longestWord;
}

// console.log(findLongestWord('learning loops builds skill'))