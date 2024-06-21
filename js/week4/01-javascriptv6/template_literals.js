const website = 'Zindua School'




//String Concatenation
const userName = 'Shawn'
const balance = '7900'

//Using regular string
const str1 = `Hi` + userName + `;` + `your balance is` + balance + `.`;
console.log("Regular string: ", str1)

//Using template literal
const str2 = `Hi ${userName}, your balance is ${balance}.`
console.log("Template literal: ", str2)

// const shoppingList = (groceries) => {
//     return groceries.map(({item,quantity}) => `${item}: ${quantity}`).join('\n');
// };
//.join convert array into a string
//('\n') new line
//('t') tab
//(',') same line separated by a comma
// const groceries = [
//     { item: "cabbages", quantity:4},
//     { item:"tomatoes", quantity:20},
//     { item:"onions", quantity:20},
//     { item:"carrots", quantity:20}
// ];

// console.log(shoppingList(groceries));