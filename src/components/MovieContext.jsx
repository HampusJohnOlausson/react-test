import React,{ createContext, useState } from 'react'
import MovieList from './MovieList';


export const MovieProvider = createContext();

export const MovieContext = (props) => {

    const [movies, setMovies] = useState([
      {
        name: "Harry Potter",
        price: "$10",
        id: 2312,
      },
      {
        name: "StarWars",
        price: "$10",
        id: 1344,
      },
      {
        name: "Inception",
        price: "$10",
        id: 32311,
      },
    ]);

    return (
        <div>
            <MovieProvider.MovieContext value={'hello'}>
                {props.children}
            </MovieProvider.MovieContext>
        </div>
    )
}

