
// const getMinMaxSum = (numbers) => {
//     //destructuring
//     const [first, ...rest] = [numbers];
   
//     const {min,max,sum} = rest.reduce((acc,num) =>{
//         return{
//             min: Math.min(1,2,3,4,5),
//             max: Math.max(1,2,3,4,5),
//             sum: acc.sum + num
//         };

//     }, {min: first, max: first, sum: first});

//     return{min, max, sum};


// };

// const numbers = [1,2,3,4,5];

// let result = getMinMaxSum(numbers)

// console.log(result);//{min: 1, max: 5, sum: 15}


const getMinMaxSum = (numbers) => {


    const [first, ...rest] = numbers

    const min = Math.min(first, ...rest);
    const max = Math.max(first, ...rest);
    const sum = numbers.reduce((acc,num) => acc + num, 0);
    
    return { min, max, sum};
};

const numbers = [7, 9, 3, 6, 5];
const result = getMinMaxSum(numbers);
console.log(result);
