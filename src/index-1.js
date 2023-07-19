//***
// 1.Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
//     welsh: 'Croeso'

function greet(language) {
    return data[language] || data['English'];
}

const data = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
};
console.log(greet('german'));

//
// 2.Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3;
    // switch (true) {
    //     case average >= 90 && average <= 100:
    //         return 'A';
    //         break;
    //     case average >= 80 && average < 90:
    //         return 'B';
    //         break;
    //     case average >= 70 && average < 80:
    //         return 'C';
    //         break;
    //     case average >= 60 && average < 70:
    //         return 'D';
    //         break;
    //     default:
    //         return 'F';
    //         break;
    // }
    if (average >= 90 && average <= 100) {
        return 'A';
    } else if (average >= 80 && average < 90) {
        return 'B';
    } else if (average >= 70 && average < 80) {
        return 'C';
    } else if (average >= 60 && average < 80) {
        return 'D';
    } else if (average < 60) {
        return 'F';
    }
}
console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 93));
console.log(getGrade(50, 70, 63));

// 3
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
function bmi(weight, height) {
    let index = weight / Math.pow(height, 2);
    console.log(index);
    if (index <= 18.5) {
        return 'Underweight';
    } else if (index <= 25) {
        return 'Normal';
    } else if (index <= 30) {
        return 'Overweight';
    } else if (index > 30) {
        return 'Obese';
    }
}
console.log(bmi(80, 1.8));

//4
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

function cookie(x) {
    if (typeof x === 'string') {
        return 'Who ate the last cookie? It was Zach!';
    } else if (typeof x === 'number') {
        return 'Who ate the last cookie? It was Monica!';
    } else {
        return 'Who ate the last cookie? It was  a dog!';
    }
}
console.log(cookie('Ryan'));
console.log(cookie(26));

//5
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
function transposeTwoStrings(array) {
    let arr1 = array[0];
    let arr2 = array[1];
    let arr = [];
    let len = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < len; i += 1) {
        arr.push((arr1[i] || ' ') + ' ' + (arr2[i] || ' '));
    }
    return arr.join('/n');
}
console.log(transposeTwoStrings(['Hello', 'World']));
