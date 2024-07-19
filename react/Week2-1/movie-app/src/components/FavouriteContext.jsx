import React, {createContext, useState, useContext, Children} from "react";

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (movie) => {
        setFavourites([...favourites,movie]);
    };

    return (
        <FavouritesContext.Provider value={{favourites, addFavourite}}>{children}</FavouritesContext.Provider>
    );
};