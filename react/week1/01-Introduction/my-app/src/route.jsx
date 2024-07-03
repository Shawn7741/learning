// import { Route, Routes } from "react-router-dom"
// import Home from './home'
// import About from './About'
// import Contact from './contact'
// import './index.css'

// const App = () =>{
//     return(
//         <div className='App'>
//             <Routes>
//                 <Route path='/' element={<Home/>} />
//                 <Route path='/about' element={<About/>} />
//                 <Route path='/contact' element={<Contact/>} />
//             </Routes>
//         </div>
//     )
// }

// export default App

//Route.jsx
import {Route, Routes} from 'react-router-dom'
import Home from './home'
import About from './About'
import Contact from './contact'
import './index.css'
const App = () =>{
    return(
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/contact/:id' element={<Contact/>} />
            </Routes>
        </div>
    )
}
export default App