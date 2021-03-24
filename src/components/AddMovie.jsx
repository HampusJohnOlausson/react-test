import React, {useContext, useState} from 'react'
import { MovieContext } from './MovieContext';

const AddMovie = () => {

    const [title, setTitle] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const handleClick = (e) => {
        e.preventDefault();
        addMovie(title)
        setTitle('');
    }

    const addMovie = (title) => {
        const updateList = [...movies, { title } ];
        setMovies(updateList)
    }

    return (
        <div>
        <input title="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={handleClick} type="submit" >add</button>        
        </div>
    )
}

export default AddMovie
