import { useState } from "react";


function  Counter(){

    const[count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count -1)
    }

    return(
        <div>
            <h1>Counter App</h1>
            <br></br>
            <h2>{count}</h2>
            <br></br>
            <button className='bg-sky-400 px-4 py-2 text-white hover:bg-sky-900 sm:py-3' onClick={handleIncrement}>+</button>
            <button className='bg-green-400 px-4 py-2 text-white hover:bg-green-900 sm:py-3' onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter