import React from 'react'
import Movie from './Movie'

const MovieList = () => {

    const [movies, setMovies] = useState([
        {
            title: 'lotr',
            id: 22
        },
        {
            title: 'harry',
            id: 11
        }
    ])

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
