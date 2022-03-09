
//Ćwiczenia

const arrayOfNumbers = [];

arrayOfNumbers.push(5);
arrayOfNumbers.push(4);

const arrayOfLetters = ["a", "b", "c"];
// <nameOfArray>[<index>]
//console.log(arrayOfLetters[0]);

const reversedArray = getReversedArray(arrayOfLetters);

function getReversedArray(array) {
    return array.reverse();
}

console.log(reversedArray);

const arrayOfNumbers = [1, -12, 178, 10, -222];

const result = getSmallestNumber(arrayOfNumbers);

console.log(result);


let smallestNumber = undefined;

// smallestNumber === undefined;

for (let i = 0; i < array.length; ++i) {
    // smallestNusmber === undefined;
}



function getSmallestNumber(array) {
    let smallestNumber;
    for (let i = 0; i < array.length; ++i) {
        const currentElement = arrayOfNumbers[i];
        if (smallestNumber === undefined || currentElement < smallestNumber) {
            smallestNumber = currentElement;
        }
    }
    return smallestNumber;

    // let i = 0;
    // while(i < array.lengt) {
    //   console.log(arrayOfNumbers[i]);
    //   ++i;
    // }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach





//Zad_1

const arrayOfNumbers = [1, 16, -200, -1];
const biggestNumber = getBiggestNumber(arrayofNumbers);
console.log(biggestNumber);



function getBiggestNumber(array) {
    let biggestNumber;
    for (let i = 0; i < array.length; i++) {
        const currentElement = arrayOfNumbers[i];
        if (biggestNumber === undefined || currentElement > biggestNumber) {
            biggestNumber = currentElement;
        }
    }
    return biggestNumber
}

//Zad_2

const words = ["bernardyn", "budowa", "anglia", "zakaz"];
const sortedWords = sortStrings(words);
console.log(sortedWords); // ["anglia", "bernardyn", "budowa", "zakaz"];

function sortStrings(words) {
    words.sort();
    console.log(words);
}

//Zad_3 - nie wiem jak zamienić na arrayOfNumbers[i]?

const arrayOfNumbers = createArrayWithNumbers(12);
console.log(arrayOfNumbers);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12]

function createArrayWithNumbers(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}

//Zad_4

//W trakcie - zrobię tyle ile dam radę
