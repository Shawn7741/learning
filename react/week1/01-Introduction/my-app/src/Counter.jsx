// // import { useState } from "react";


// // const Counter = () => {

// //     const[count, setCount] = useState(0);

// //     const handleIncrement = () => {
// //         setCount(count + 1)
// //     }

// //     const handleDecrement = () => {
// //         setCount(count -1)
// //     }

// //     return(
// //         <div>
// //             <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={count}/>
// //             {/* <h1>Counter App</h1>
// //             <br></br>
// //             <h2>{count}</h2>
// //             <br></br>
// //             <button className='bg-sky-400 px-4 py-2 text-white hover:bg-sky-900 sm:py-3' onClick={handleIncrement}>+</button>
// //             <button className='bg-green-400 px-4 py-2 text-white hover:bg-green-900 sm:py-3' onClick={handleDecrement}>-</button> */}
// //         </div>
// //     )
// // }

// // // const Counter = () =>{
// // //     const greeting ='Hello react';

// // //     return(
// // //         <div>
// // //             <Welcome text={greeting}/>
// // //         </div>
// // //     );
// // // };

// // // const Welcome = ({text}) => {
// // //     return <h1>{text}</h1>
// // // };

// // // new component
// // const Main = (props) =>{

// //     return(
// //         <div className="h-56 grid grid-cols3 gap-4 content-center">
// //             <h1>Counter App</h1>
// //             <br></br>
// //             <h2>{props.count}</h2>
// //             {/*buttons*/}
// //             <button className='bg-sky-400 px-4 py-2 text-white hover:bg-sky-900 sm:py-3' onClick={handleIncrement}>+</button>
// //             <button className='bg-green-400 px-4 py-2 text-white hover:bg-green-900 sm:py-3' onClick={handleDecrement}>-</button>
// //         </div>
// //     )
// // }

// // export default Counter



// import { useState } from "react";

// function Garage(){

//     const carName = "BMW";

//     return(
//         <>
//         <h2>Which care lives in my garage?</h2>
//         <Car brand={carName} />
//         </>
//     )
// }

// function Car(props){
//     return <h2>I am a {props.brand}</h2>
// }

// export default Garage

import { useSelector, useDispatch } from "react-redux";

const App =() => {
    // Select the count from the store
    const count = useSelector((state) => state.count);

    // Get the dispatch function
    const dispatch = useDispatch(); //action are increment and decrement

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

export default App;