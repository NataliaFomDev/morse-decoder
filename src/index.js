const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const desiredLength = 10;
let answer = '';

// функция определения и добавления слева недостающих нулей
function padWithZeros(number, desiredLength) {
    const numberStr = String(number);
    if (numberStr.length >= desiredLength) {
      return numberStr;
    }
  
    const zerosToAdd = desiredLength - numberStr.length;
    const paddedNumber = '0'.repeat(zerosToAdd) + numberStr;
    return paddedNumber;
}
  
    
// функция деления исходной строки на элементы массива
function decode(expr) {
    const letters = expr.split(''); // делим массив символов на элементы
    //console.log(letters);
    
    letters.forEach((letter) => {
        if (letter === ' ') {   
            return '**********';    // если элемент это пробел, ставим звездочки
        } else {               
            fromElToDot(letter);    // если элемент это символ, активируем функцию fromElToDot
        }
    })};

// функция определения сочетания точек-тире из объекта для элемента
function fromElToDot (letter) {
    let symbolToFind = letter;
    for (const morseCode in MORSE_TABLE) {
        if (MORSE_TABLE[morseCode] === symbolToFind) {  // определяем код морзе для каждого символа
            console.log(`Символ '${symbolToFind}' соответствует морзе-коду '${morseCode}'`);
            fromDotToTen(morseCode);
        }
    }
} 

// функция преобразования точек-тире в число из 10 цифр
function fromDotToTen (morseCode) {
    const arrMorse = morseCode.split('');   // делиим массив точек-тире на элементы
                    
    arrMorse.forEach((element) => {
        if (element === '.') {              // превращаем точку в 10
            return answer += '10';
        } else {
            return answer += '11';          // превращаем тире в 11
        }
    });      
}


/*module.exports = {
    decode
}*/

decode('o5');
const result = padWithZeros(answer, desiredLength);
let itog = result + answer;
console.log(answer);
console.log(result);
console.log(itog);