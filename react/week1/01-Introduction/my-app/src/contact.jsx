// import Navbar  from "./navbar"

// const Contact = ()=>{
//     return(
//         <div>
//             <Navbar />
//             <h1>Contact</h1>
//         </div>
//     )
// }

// export default Contact

//contact.jsx
import Navbar from './navbar'
import { useParams } from 'react-router-dom';
const Contact = ()=>{
    const {id} = useParams();
    return(
        <div>
            <Navbar />
            <br />
            <h1>Contact Page</h1>
            <br />
            <p>User ID: {id}</p>
        </div>
    )
}
export default Contact