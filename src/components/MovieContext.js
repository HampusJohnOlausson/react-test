import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export default function MovieProvider(props) {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 21214
        },
        {
            name: 'Game of thones',
            price: '$10',
            id: 244214
        },
        {
            name: 'Inception',
            price: '$10',
            id: 222161
        }
    ]);

    return (
        <div>
            <MovieContext.Provider value={'Hello'}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
