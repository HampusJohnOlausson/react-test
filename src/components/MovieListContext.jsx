import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'harry potter',
            id: 12
        },
        {
            name: 'lord of the rings',
            id: 34
        }
    ])

    return (

        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}