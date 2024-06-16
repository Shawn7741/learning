// try {
//     let a = undefinedVariable;
//   } catch (e) {
//     console.log(e instanceof ReferenceError); // true
//     console.log(e.message); // "undefinedVariable is not defined"
//     console.log(e.name); // "ReferenceError"
//     console.log(e.stack); // Stack of the error
//   }

try {
    let y = "shawn";
    let x = "jess";
     let sum = y + x;
 console.log(sum);
} catch (error) {
    console.log(error);
}
 