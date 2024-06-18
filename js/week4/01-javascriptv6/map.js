// const fruits = new Map([
//     ["apples", 500],
//     ["avocado", 200],
//     ["oranges", 50]
// ]);

// let number = fruits.get("apples");
// console.log(number);

const fuel = new Map([
    ["petrol", 193],
    ["diesel", 154],
    ["kerosene", 126]
]);

let number = fuel.get("petrol");


document.getElementById("demo").innerHTML = "The price of petrol is " + number;