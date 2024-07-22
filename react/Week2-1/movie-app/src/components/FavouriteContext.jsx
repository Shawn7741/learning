import React, {createContext, useState, useContext, } from "react";

const FavouritesContext = createContext();

export const useFavourites = () => {
    return useContext(FavouritesContext);
    
}; 

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (movie) => {
        setFavourites((prevFavourites) => {
            if (prevFavourites.some(fav => fav.imdbID === movie.imdbID)) {
                return prevFavourites;
            }
            return [...prevFavourites, movie];
        });
    };

    const removeFavourite = (movie) => {
        setFavourites((prevFavourites) => {
            return prevFavourites.filter(fav => fav.imdbID !== movie.imdbID);
        });
    };

    return (
        <FavouritesContext.Provider value={{favourites, addFavourite, removeFavourite}}>{children}</FavouritesContext.Provider>
    );
};