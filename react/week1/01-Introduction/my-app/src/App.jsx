import { useState } from 'react'
import './App.css'



function App(){
  // const [state,setStateFunction] = useState(initialState);

const[age,setAge] = useState(21);
const[name,setName] = useState("Shawn");
const[country,setCountry] = useState("Kenya");
return(
  <>
  <h1 className='text-3sm font-bold underline'>Hello my name is {name}, I am {age} years old and I come from {country}</h1>
  </>
)

}


export default App
