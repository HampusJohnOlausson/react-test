import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            <h2>{movies.length}</h2>
        </div>
    )
}

export default Nav
