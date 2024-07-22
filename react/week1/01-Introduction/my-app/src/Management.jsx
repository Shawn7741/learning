import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    //global states
    const [items, setItems] = useState([]);
    function handleItems(item){
        setItems((items) => [...items, item])
    }
    const handleRemove = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }
    //
    return (
        <div className="flex flex-col items-center min-h-screen bg-teal-200 p-4">
            <Header />
            <Nav handleItems={handleItems} />
            <Listarea items={items} handleRemove={handleRemove}/>
            <Footer items={items}/>
        </div>
    );
}
const Header = () => {
    return  <h2 className="text-2xl font-light mb-4 "> ToDoList </h2>
}
const Nav = ({handleItems}) => {
    //local state
    const [name, setName] = useState("");
    const handleClick = () => {
        const newItem = {name, id: uuidv4()};
        handleItems(newItem);
        setName("");
    };
    return (
        <div className="flex mb-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="bg-cyan-500 text-white px-4 py-2 rounded-r hover:bg-cyan-800" onClick={handleClick}>Add Task</button>
            </div>
    );
}
const Listarea = ({items, handleRemove}) => {
    return (
        <>
            <ul className="list-none p-0 mb-4">
                {items.map((item) => (
                    <li key={item.id}>Name:{item.name}
                    <button type="button"  onClick={() => handleRemove(item.id)} className="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-600">REMOVE</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
const Footer = ({items}) => {
    return (
        <>
        {items.length !== 0 ? (
            <p className="font-extralight"> You have <b>{items.length}</b>  tasks in your pipeline</p>
        ) : (
            <p className="text-2xl">You can start adding tasks</p>
        )}
        </>
    );
}
export default App