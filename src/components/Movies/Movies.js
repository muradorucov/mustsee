import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';



const Movies = () => {
    const { movies } = useSelector(state => state)

    return (
        <ul className="movies">
            {movies[0]?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    )
}

export default Movies
