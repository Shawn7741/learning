import { useCallback, useState } from "react";

// const Counter = ({increment, decrement},) =>{
//     return  <button onClick={increment}>Increase</button>

// }

// const App = () => {
//     const [count, setCount] = useState(0);
//     const increment = useCallback(()=>{
//         setCount(c => c + 1)
//     }, [setCount])

//     return(
//         <div>
//             <p>Count: {count}</p>
//             <Counter increment={increment} />
//         </div>
//     )
// }


const Counter =({increment, decrement}) =>{
    return(
        <div>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    ) 
    
    
    
}

const App = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback (()=>{
        setCount(c => c + 1)
    }, [setCount])
    
    const decrement = useCallback (()=>{
        setCount(c => c - 1)
    },[setCount])

    return(
        <div>
            <p>Count: {count}</p>
            <Counter increment={increment} decrement={decrement}/>
        </div>
    )
}










// const Counter = ({decrement}) =>{
//     return <button onClick={decrement}>Decrease</button>
// }

// const App = () => {
//     const [ count, setCount] = useState(0);
//     const decrement = useCallback(()=>{
//         setCount(c => c - 1)
//     }, [setCount])

//     return(
//         <div>
//             <p>Count: {count}</p>
//             <Counter decrement={decrement} />
//         </div>
//     )
// }



export default App