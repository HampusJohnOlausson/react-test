import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {

        const [movies, setMovies] = useState([
          {
            title: "lotr",
            id: 22,
          },
          {
            title: "harry",
            id: 11,
          },
          {
              title: 'love actually',
              id: 33,
          }
        ]);

    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}


