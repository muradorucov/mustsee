import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';



const Movies = () => {
    const { movies } = useSelector(state => state)

    // console.log(movies[0]);

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
