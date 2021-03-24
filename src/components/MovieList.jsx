import React, { useContext, useState } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            {
                movies.map(movie => (
                    <Movie title={movie.title} key={movie.id}/>
                    )) 
            }
        </div>
    )
}

export default MovieList
