import React from 'react';
import { useSelector } from 'react-redux';
import { AddIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';


const Movies = () => {
    const { movies } = useSelector(state => state)

    return (
        <ul className="movies">
            {movies[0]?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                    <div className='movie-item_action'>
                        <button><AddIcon /></button>
                        <button><InfoOutlineIcon /></button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Movies
