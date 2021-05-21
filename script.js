// This section contains the solution to the first part of the task

function convertFahrToCelsius(temperatureInFahrenheit) {

    let parameterType = (typeof(temperatureInFahrenheit));
    let temperatureInCelsius = (temperatureInFahrenheit - 32) * (5/9);
    let finalTemperatureInCelsius = temperatureInCelsius.toFixed(4);
    
    
    if ((isNaN(temperatureInFahrenheit) === true) && (Array.isArray(temperatureInFahrenheit)) !== true) {
        let stringFormOftemperatureInFahrenheit = JSON.stringify(temperatureInFahrenheit);
        console.log(`${stringFormOftemperatureInFahrenheit} is not a valid number but a/an ${parameterType}`); 
        return `${stringFormOftemperatureInFahrenheit} is not a valid number but a/an ${parameterType}`
    }

    if ((isNaN(temperatureInFahrenheit) === false) && (/^ *$/.test(temperatureInFahrenheit)) == false && ((parameterType !== 'boolean'))) {
        console.log(finalTemperatureInCelsius); 
        return finalTemperatureInCelsius;
    }   

    if (/^ *$/.test(temperatureInFahrenheit) && (temperatureInFahrenheit == [])) {
        console.log(`${temperatureInFahrenheit} is not a valid number but a/an ${parameterType}`); 
        return `${temperatureInFahrenheit} is not a valid number but a/an ${parameterType}`
    }

    if ((parameterType === 'boolean') ) {
        console.log(`${temperatureInFahrenheit} is not a valid number but a/an ${parameterType}`); 
        return `${temperatureInFahrenheit} is not a valid number but a/an ${parameterType}`
    }


    if ((Array.isArray(temperatureInFahrenheit)) === true) {
        let ArrayFormOftemperatureInFahrenheit = JSON.stringify(temperatureInFahrenheit);
        console.log( `${ArrayFormOftemperatureInFahrenheit} is not a valid number but an Array`); 
        return `${ArrayFormOftemperatureInFahrenheit} is not a valid number but an Array`
    }

    
    return finalTemperatureInCelsius;
    
}


convertFahrToCelsius(true);
convertFahrToCelsius('0');
convertFahrToCelsius("");
convertFahrToCelsius({});
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});





// This section contains the solution to the second part of the task

function checkYuGiOh(n) {
    a = [];

    for (let i = 1; i <= n ; i++) {
        a.push(i);
    } 

divisibleNumbers2 = [];
divisibleNumbers3 = [];
divisibleNumbers5 = [];
divisibleNumbers23_5 = [];
divisibleNumbers25_3 = [];
divisibleNumbers35_2 = [];
divisibleNumbers235 = [];


    a.map(item => {
        if ((item % 2 == 0) && (item % 3 !== 0) && (item % 5 !== 0)) {
            divisibleNumbers2.push(item);
            
        }
        if ((item % 3 == 0) && (item % 2 !== 0) && (item % 5 !== 0)) {
            divisibleNumbers3.push(item);

            
        }
        if ((item % 5 == 0) && (item % 3 !== 0) && (item % 2 !== 0)) {
            divisibleNumbers5.push(item);

        }


        if ((item % 2 == 0) && (item % 3 == 0) && (item % 5 !== 0)) {
            divisibleNumbers23_5.push(item);
            
        }

        if ((item % 2 == 0) && (item % 5 == 0) && (item % 3 !== 0)) {
            divisibleNumbers25_3.push(item);

        }
        if ((item % 3 == 0) && (item % 5 == 0) && (item % 2 !== 0)) {
            divisibleNumbers35_2.push(item);

        }
        if ((item % 2 == 0) && (item % 3 == 0) && (item % 5 == 0)) {
            divisibleNumbers235.push(item);

        }
    });   

    for (const item2 of divisibleNumbers2) {
        if (a.includes(divisibleNumbers2[divisibleNumbers2.indexOf(item2)])) {
            position2 = a.indexOf(item2);
            a.splice(position2,1,'yu');


        }
    }
    for (const item3 of divisibleNumbers3) {
        if (a.includes(divisibleNumbers3[divisibleNumbers3.indexOf(item3)])) {
            position3 = a.indexOf(item3);
            a.splice(position3,1,'gi');
        }
    }
    for (const item5 of divisibleNumbers5) {
        if (a.includes(divisibleNumbers5[divisibleNumbers5.indexOf(item5)])) {
            position5 = a.indexOf(item5);
            a.splice(position5,1,'oh');
        }
    }
    for (const item23_5 of divisibleNumbers23_5) {
        if (a.includes(divisibleNumbers23_5[divisibleNumbers23_5.indexOf(item23_5)])) {
            position23_5 = a.indexOf(item23_5);
            a.splice(position23_5,1,'yu-gi');
        }
    }
    for (const item25_3 of divisibleNumbers25_3) {
        if (a.includes(divisibleNumbers25_3[divisibleNumbers25_3.indexOf(item25_3)])) {
            position25_3 = a.indexOf(item25_3);
            a.splice(position25_3,1,'yu-oh');
        }
    }
    for (const item35_2 of divisibleNumbers35_2) {
        if (a.includes(divisibleNumbers35_2[divisibleNumbers35_2.indexOf(item35_2)])) {
            position35_2 = a.indexOf(item35_2);
            a.splice(position35_2,1,'gi-oh');
        }
    }
    for (const item235 of divisibleNumbers235) {
        if (a.includes(divisibleNumbers235[divisibleNumbers235.indexOf(item235)])) {
            position235 = a.indexOf(item235);
            a.splice(position235,1,'yu-gi-oh');
        }
    }

    if ((isNaN(n) === true) && (Array.isArray(n)) !== true) {
        let newN = JSON.stringify(n);
        console.log(`invalid parameter: ${newN}`); 
        return `invalid parameter: ${newN}`;
    }

    if ((isNaN(n) === false) && (/^ *$/.test(n)) == false  && ((typeof(n) !== 'boolean'))) {
        console.log(a); 
        return a;
    }

    if ((typeof(n) === 'boolean') ) {
        console.log(`invalid parameter: ${n}`);
        return `invalid parameter: ${n}`;
    }

    

    if (/^ *$/.test(n) && (n == [])) {
        console.log(`invalid parameter: ${n}`);
        return `invalid parameter: ${n}`;
    }


    if ((Array.isArray(n)) === true) {
        let newN = JSON.stringify(n);
        console.log(`invalid parameter: ${newN}`); 
        return `invalid parameter: ${newN}`;
    }

console.log(a);
return a;

}

checkYuGiOh(10);
checkYuGiOh(true);
checkYuGiOh("5");
checkYuGiOh("Fizz Buzz is meh");




/* 
Task Title: Frontend Algorithms Task (Frontend Task 4)
Front End
HTML / CSS / JavaScript
Created 14-05-2021 19:20:17

This task is to give you a feel of basic JavaScript algorithms.

1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

 
Note:

- Round up your answers to 4 decimal places (hint: use the toFixed method)
- C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
- if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
    `${parameter} is not a valid number but a/an ${parameter's type}.`
You can use the following cases as guides:

- convertFahrToCelsius(0) should return `-17.7778`
- convertFahrToCelsius("0") should return `-17.7778`
- convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
- convertFahrToCelsius({temp: 0}) should return `{"temp": 0} is not a valid number but a/an object.`
 

2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces
 multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

Note:

- for numbers that have multiple factors, use hyphens as separators
e.g 10 === "yu-oh", 30 === "yu-gi-oh"
- perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
Use the following cases as guides:

- checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
- checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
- checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`
*/