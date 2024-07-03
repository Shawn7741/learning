import { useState } from "react"
import { useEffect } from "react";
//rick & morty component
const RickAndMorty = () =>{
    const [characters, setCharacters] = useState([]);
    //async to fetch data from the api
    // const fetchCharacters = async () => {
    //     try catch
    //     try{
    //          const response = await fetch("https://rickandmortyapi.com/api/character")
    //         const data = await response.json();
    //         setCharacters(data.results)
    //     }
    //     catch(error){
    //         console.error('Error in fetching data:', error)
    //     }
       
    // }

    const fetchCharacters = async () => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            setCharacters(data.results);
        })
        .catch(error => {
            console.error('Error in fetching data:', error);
        });
    };
    //useEffect to fetch data from API when component is mounted
    useEffect( ()=>{
        fetchCharacters()
    }, []);
    return(
        <div>
            {characters.map((character) => (
                <div key={character.id}>
                    <div>{character.name}</div>
                    <img src={character.image} alt={character.name} />
                </div>
            ))}
        </div>
    )
}
export default RickAndMorty;