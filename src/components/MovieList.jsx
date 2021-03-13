import React, { useState, useContext } from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieListContext'

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            
            {
                movies.map(movie => ( 
                    <Movie key={movie.id} name={movie.name}/>
                 ))
            }
        </div>
    )
}

export default MovieList
